<!--
	@component

	Представляет собой меню с действиями. В `<slot />` ожидает
	получить элемент, при нажатии на который меню будет
	появляться. Размещает себя относительно этого элемента.
-->

<script lang="ts" context="module">
	export type MenuItem = {
		id: string,
		label: string
	};
</script>

<script lang="ts">
	import { onMount } from "svelte";

	export let items: MenuItem[];
	export let onItemSelect: (id: string) => void;
	export let show = false;

	let menu: HTMLDivElement;

	onMount(() => {
		const handler = event => {
			if (!show) return;

			console.log("called");
			if (!menu.contains(event.target)) {
				show = false;
			}
		}

		document.addEventListener("mousedown", handler);

		return () => document.removeEventListener("mousedown", handler);
	});
</script>

<div bind:this={menu} class="component_wrapper">
	<slot />
	{#if show}
		<div class="menu_wrapper">
			<ul role="menu" class="menu">
				{#each items as item}
					<li class="gp-display-contents" role="presentation">
						<button
							role="menuitem"
							class="menu__item"
							on:click={() => onItemSelect(item.id)}
						>{item.label}</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.component_wrapper {
		position: relative;
	}

	.menu_wrapper {
		position: absolute;
		inset-block-start: 100%;
		inset-inline-start: 0;
	}

	.menu {
		inline-size: 200px;
		padding: 8px 0;
		box-shadow:
			0 1px 2px rgba(0, 0, 0, 0.3),
			0 2px 6px 2px rgba(0, 0, 0, 0.15);
		border-radius: 4px;
		background-color: var(--md-sys-color-surface-container);
		margin: 0;
		overflow-y: auto;
		max-block-size: 256px;
	}

	.menu::-webkit-scrollbar {
		inline-size: 12px;
	}

	.menu::-webkit-scrollbar-track {
		margin: 4px 0;
	}

	.menu::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 10px 10px var(--md-sys-color-outline);

		border-style: solid;
		border-width: 4px 4px;
		border-color: transparent;
		border-radius: 100px;
	}

	.menu__item {
		display: block;
		inline-size: 100%;
		padding: 12px;
		text-align: left;
		color: var(--md-sys-color-on-surface);

		/* body-large */
		font-family: var(--md-sys-typescale-body-large-font-family-name);
		font-style: var(--md-sys-typescale-body-large-font-family-style);
		font-weight: var(--md-sys-typescale-body-large-font-weight);
		font-size: var(--md-sys-typescale-body-large-font-size);
	}

	.menu__item:hover {
		background-color: color-mix(in srgb, transparent, var(--md-sys-color-on-surface) 8%);
	}

	.menu__item:active,
	.menu__item:focus-visible {
		background-color: var(--md-sys-color-surface-container-highest);
	}
</style>
