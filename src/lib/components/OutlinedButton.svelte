<script lang="ts">
	import Icon from "./Icon.svelte";
	import type { Icons } from "./Icon.svelte";

	export let icon: Icons | null = null;
	export let text: string;
</script>

<button class="md-primary md-on-primary-text md-label-large button" on:click>
	{#if icon !== null}
		<div class="icon_wrapper">
			<Icon --size="18px" {icon} />
		</div>
	{/if}
	{text}
</button>

<style>
	.button {
		--opacity: 0%;

		display: flex;
		flex-direction: row;
		gap: 8px;
		align-items: center;
		justify-content: center;

		margin: 0;
		padding: 9px 23px;
		background-color: color-mix(in srgb, transparent, var(--md-sys-color-primary) var(--opacity));
		color: var(--md-sys-color-primary);

		border: 1px solid var(--md-sys-color-outline);
		border-radius: 100px;

		transition: all 200ms ease-in-out;
	}

	.button:hover {
		--opacity: 8%;
	}

	.button:focus-visible,
	.button:active {
		--opacity: 12%;
	}

	.button:focus-visible {
		border-color: var(--md-sys-color-primary);
	}

	.icon_wrapper {
		margin-left: -8px;
	}
</style>
