<script lang="ts">
	import ChipButton from "$lib/components/ChipButton.svelte";
	import FilledButton from "$lib/components/FilledButton.svelte";
	import Tabs from "$lib/components/Tabs.svelte";
	import type { Tab } from "$lib/components/Tabs.svelte";
	import { marked } from "marked";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	const tabs: Tab[] = [
		{
			name: "Статья",
			url: "./article"
		},
		{
			name: "Комьюнити",
			url: "./community"
		}
	];

	export let data;
</script>

<svelte:head>
	<title>{data.name} | Статья — Game Portal</title>
</svelte:head>

<div class="global_wrapper">
	<div class="wrapper">
		<header class="header">
			<div class="heading">
				<div class="text">
					<h1 class="md-display-large md-on-surface-text">
						{data.name}
					</h1>
					<p class="md-label-large md-on-surface-variant-text">
						{data.year} • {data.developer}
					</p>
				</div>
				<ul class="tag_list">
					{#each data.tags as tag}
						<li class="gp-display-contents">
							<ChipButton text={tag.label} on:click={goto(`/?tags=${tag.id}`)} />
						</li>
					{/each}
				</ul>
			</div>
			<div class="controls">
				<Tabs tabs={tabs} selected="./article" />
				<FilledButton text="Редактировать" icon="edit" on:click={goto(`${$page.url.pathname}/edit`)} />
			</div>
		</header>
		<main class="main">
			<article class="article">
				{@html marked(data.article, { mangle: false, headerIds: false })}
			</article>
		</main>
	</div>
</div>

<style>
:global(body) {
	background-color: var(--md-sys-color-surface-container);
}

.global_wrapper {
	block-size: 100dvh;
	padding-block-start: 60px;
}

.wrapper {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	gap: 24px;

	background-color: var(--md-sys-color-surface-container-low);

	max-inline-size: 900px;
	inline-size: 100%;
	min-block-size: 100%;
	border-radius: 24px 24px 0 0;

	margin-inline: auto;
}

.header {
	padding: 36px 36px 0;

	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	gap: 20px;
}

.heading {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	gap: 16px;
}

.text {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
	flex-shrink: 0;
}

.text h1 {
	line-height: 64px;
}

.text p {
	line-height: 20px;
}

.tag_list {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 0;
	gap: 8px;

	flex-wrap: wrap;
}

.controls {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.main {
	border-radius: 24px 24px 0 0;
	background-color: var(--md-sys-color-surface);
	min-block-size: 100%;
	padding: 36px;

	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	gap: 20px;
	flex: 1;
}

.article {
	color: var(--md-sys-color-on-surface);
}

.article :global(p) {
	/* body-large */
	font-family: var(--md-sys-typescale-body-large-font-family-name);
	font-style: var(--md-sys-typescale-body-large-font-family-style);
	font-weight: var(--md-sys-typescale-body-large-font-weight);
	font-size: var(--md-sys-typescale-body-large-font-size);
}

.article :global(p):not(:first-child) {
	padding-block-start: 16px;
}

.article :global(h1) {
	/* title-large */
	font-family: var(--md-sys-typescale-title-large-font-family-name);
	font-style: var(--md-sys-typescale-title-large-font-family-style);
	font-weight: var(--md-sys-typescale-title-large-font-weight);
	font-size: var(--md-sys-typescale-title-large-font-size);

	padding-block-end: 4px;
}

.article :global(h1):not(:first-child) {
	padding-block-start: 28px;
}
</style>
