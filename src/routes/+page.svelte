<script lang="ts">
	import FilterChip from "$lib/components/FilterChip.svelte";
	import SearchBar from "$lib/components/SearchBar.svelte";
	import GameSummaryCard from "./GameSummaryCard.svelte";
	import type { GameSummary, Tag } from "$lib/types";
    import { queryParam } from "sveltekit-search-params";

	export let data;

	type Nullable<T> = T | null;
	type TagSelection = { [tagId: Tag["id"]]: boolean };

	const searchInput = queryParam("q");

	const selectedTags = queryParam("tags", {
		decode: decodeTags,
		encode: encodeTags
	});

	$: filteredSummaries = filterSummaries(data.summaries, $searchInput, $selectedTags);

	function decodeTags(rawTags: Nullable<string>) {
		if (rawTags === null || rawTags === "") return {};

		const tags: TagSelection = {};
		rawTags
			?.split(",")
			?.forEach(tag => {
				const parsed = parseInt(tag, 10);
				if (!isNaN(parsed)) tags[parsed] = true;
			});
		
		return tags;
	}

	function encodeTags(tags: TagSelection) {
		const selectedTags: number[] = [];

		for (const [tag, selected] of Object.entries(tags)) {
			if (selected) {
				selectedTags.push(Number(tag));
			}
		}

		return selectedTags.join(",");
	}

	function filterSummaries(summaries: GameSummary[], searchInput: Nullable<string>, selectedTags: Nullable<TagSelection>) {
		if (searchInput === null && selectedTags === null) return summaries;

		if (searchInput !== null && selectedTags === null) {
			return summaries
				.filter(x =>
					x.name
						.toLowerCase()
						.includes(searchInput.toLowerCase()));
		}

		if (selectedTags !== null) {
			const keys = Object.keys(selectedTags).map(Number);
			const values = Object.values(selectedTags);

			const trueKeys = keys.filter((_, idx) => values[idx]);

			if (trueKeys.length === 0 || keys.length === 0)
				return summaries.filter(summary =>
					summary.name.toLowerCase().includes(searchInput?.toLowerCase() ?? ""));

			return summaries.filter(summary =>
				summary.name.toLowerCase().includes(searchInput?.toLowerCase() ?? "") &&
				trueKeys.every(tag => summary.tags.includes(tag)));
		}

		throw new Error("Unreachable part");
	}
</script>

<svelte:head>
	<title>Game Portal | Главная</title>
</svelte:head>

<div class="surface">
	<header class="header">
		<h1 class="md-display-large md-on-surface-text title">Game Portal</h1>
		<h2 class="md-headline-medium md-on-surface-variant-text subtitle">Портал по поиску игр №1</h2>
	</header>

	<main class="gp-display-contents">
		<form class="search" role="search" on:submit|preventDefault>
			<div class="search__bar">
				<SearchBar
					bind:input={$searchInput}
					placeholder="Название игры..."
				/>
			</div>
			<ul class="tag_list">
				{#each data.tags as tag}
					<li class="gp-display-contents">
						<FilterChip
							text={tag.label}
							bind:checked={$selectedTags[tag.id]}
						/>
					</li>
				{/each}
			</ul>
		</form>

		<section class="gp-display-contents">
			<ul class="game_summary_list">
				{#each filteredSummaries as summary}
					<li class="game_summary_list__item">
						<GameSummaryCard {summary} />
					</li>
				{/each}
			</ul>
		</section>
	</main>
</div>

<style>
	:global(body) {
		background-color: var(--md-sys-color-surface);
	}

	.surface {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;
		gap: 48px;
		width: 100%;
		height: 100%;
	}

	.header {
		margin-top: 264px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	.title,
	.subtitle {
		text-align: center;
	}

	.title {
		font-size: 82px;
		font-weight: bold;
		line-height: 64px;
	}

	.search {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 32px;
	}

	.search__bar {
		width: 100%;
		max-width: 600px;
	}

	.tag_list {
		padding: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 12px;
		max-width: 770px;
	}

	.game_summary_list {
		padding: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}

	.game_summary_list__item {
		display: block;
		width: 100%;
		max-width: 560px;
	}

	.game_summary_list__item:last-child {
		margin-bottom: 20px;
	}
</style>
