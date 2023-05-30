<script context="module" lang="ts">
	export type Tab = {
		name: string,
		url: string,
	};
</script>

<script lang="ts">
	export let tabs: Tab[];
	export let selected: string;

	function isSelected(url: string) {
		return url === selected;
	}
</script>

<ul class="tabs">
	{#each tabs as tab}
		<li class="gp-display-contents">
			<a href="{tab.url}" class="md-title-small md-on-surface-variant-text tab">
				<span class="tab__label { isSelected(tab.url) ? 'selected' : '' }">{tab.name}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.tabs {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0;

		max-inline-size: 360px;

		flex: 1;
		padding: 0;
		margin: 0;
		border-radius: 100px;
		overflow: hidden;
	}

	.tab,
	.tab__label {
		transition-duration: 200ms;
		transition-property: background-color, color;
		transition-timing-function: var(--gp-material-bezier);
	}

	.tab {
		--opacity: 0%;
		--opacity-color: var(--md-sys-color-on-background);

		block-size: 48px;
		max-inline-size: 180px;
		inline-size: 100%;
		margin: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		background-color: color-mix(in srgb, var(--md-sys-color-surface), var(--opacity-color) var(--opacity));
	}

	.tab:has(.tab__label.selected) {
		--opacity-color: var(--md-sys-color-primary);
	}

	.tab:hover {
		--opacity: 8%;
		color: var(--md-sys-color-on-surface);
		cursor: pointer;
	}

	.tab:active,
	.tab:focus-visible  {
		--opacity: 12%;
	}

	.tab__label {
		height: 100%;
		color: inherit;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.selected {
		color: var(--md-sys-color-primary);
		position: relative;
	}

	.selected::after {
		content: "";
		position: absolute;
		inset-block-end: 0;

		inline-size: 100%;
		block-size: 3px;
		background-color: var(--md-sys-color-primary);
		border-radius: 100px 100px 0 0;
	}
</style>
