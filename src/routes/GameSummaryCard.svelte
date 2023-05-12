<script lang="ts">
	import type { GameSummary } from "$lib/types";
	export let summary: GameSummary;
</script>

<a class="card" href={summary.id} title="Перейти на страницу {summary.name}">
	<div class="image_wrapper">
		<img
			class="image"
			alt={`${summary.name} logo`}
			src={summary.logoUrl}
		/>
	</div>
	<div class="text">
		<div class="text__heading">
			<p class="md-on-surface-text md-title-large heading__name">
				{summary.name}
			</p>
			<p class="md-on-surface-variant-text md-label-large heading__trivia">
				{summary.releaseYear} • {summary.publisher}
			</p>
		</div>
		<ul class="text__tag_list">
			{#each summary.tags as tag}
				<li class="md-on-surface-text md-label-large tag_list__tag">
					{tag}
				</li>
			{/each}
		</ul>
	</div>
</a>

<style>
	.card {
		text-decoration: none;

		padding: 16px;
		inline-size: 100%;
		block-size: 130px; /* very bad */

		border: 1px solid var(--md-sys-color-outline-variant);
		border-radius: 12px;
		background: transparent;

		display: flex;
		flex-direction: row;
		gap: 16px;
	}

	.card:focus {
		outline: auto;
	}

	.image_wrapper {
		inline-size: 220px;
		margin-inline-start: -16px;

		display: flex;
		align-items: center;
		justify-content: center;

		flex-shrink: 0;
	}

	.image {
		max-block-size: 100%;
		object-fit: scale-down;
		overflow: hidden;
	}

	.text {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 20px;

		flex-grow: 1;
	}

	.text__heading {
		display: flex;
		flex-direction: column;
		gap: 0;
		align-items: stretch;
	}

	.text__tag_list {
		--gap: 4px;

		display: flex;
		flex-direction: row;
		gap: var(--gap);

		padding: 0;
	}

	.tag_list__tag {
		display: inline-flex;
		gap: var(--gap);
	}

	.tag_list__tag:not(:first-child)::before {
		content: "•";	    /* For ones who doesn't support */
		content: "•" / "";  /* Hide from screen reader */
	}
</style>
