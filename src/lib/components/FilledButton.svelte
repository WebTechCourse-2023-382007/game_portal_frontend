<script lang="ts">
	import Icon from "./Icon.svelte";
	import type { Icons } from "./Icon.svelte";

	export let icon: Icons | null = null;
	export let text: string;
</script>

<button class="md-primary md-on-primary-text md-label-large button" on:click>
	<span class="wrapper">
		{#if icon !== null}
			<Icon {icon} />
		{/if}
		{text}
	</span>
</button>

<style>
	.button {
		padding: 0;
		margin: 0;

		transition: all 200ms ease-in-out;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		gap: 8px;
		align-items: center;
		justify-content: center;
		padding: 10px 24px;

		background-color: rgba(255, 255, 255, 0%);
		transition: all 200ms ease-in-out;
	}

	.button,
	.wrapper {
		border-radius: 100px;
	}

	.button:hover {
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3),
		0 1px 3px 1px rgba(0, 0, 0, 0.15);
	}

	.button:hover .wrapper {
		background-color: rgba(255, 255, 255, 8%);
	}

	.button:focus-visible,
	.button:active {
		box-shadow: none;
	}

	.button:focus-visible .wrapper,
	.button:active .wrapper {
		background-color: rgba(255, 255, 255, 12%);
	}
</style>
