<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import type { Icons } from "$lib/components/Icon.svelte";

	export let icon: Icons;
</script>

<button
	class="button"
	type="button"
	on:click
>
	<Icon --size="22px" {icon} />
</button>

<style>
	.button {
		--opacity: 0%;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 5px;
		background-color: color-mix(in srgb, var(--md-sys-color-secondary-container), var(--md-sys-color-on-secondary-container) var(--opacity));
		color: var(--md-sys-color-on-secondary-container);
		border-radius: 100px;
	}

	.button:hover {
		--opacity: 8%;
	}

	.button:active,
	.button:focus-visible {
		--opacity: 12%;
	}
</style>
