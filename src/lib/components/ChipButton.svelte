<script lang="ts">
	import Icon from "$lib/components/Icon.svelte";
	import type { Icons } from "$lib/components/Icon.svelte";

	export let text: string;
	export let trailingIcon: Icons | null = null;
</script>

<button class="md-label-large button" on:click>
	{text}
	{#if trailingIcon !== null}
		<span class="icon_wrapper">
			<Icon --size="18px" icon={trailingIcon} />
		</span>
	{/if}
</button>

<style>
.button {
	--opacity: 0%;

	border-radius: 8px;
	background-color: color-mix(in srgb, var(--md-sys-color-secondary-container), var(--md-sys-color-on-secondary-container) var(--opacity));
	padding: 6px 12px;

	transition-duration: 200ms;
	transition-property: background-color, box-shadow;
	transition-timing-function: var(--gp-material-bezier);

	color: var(--md-sys-color-on-secondary-container);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
}

.button:hover {
	--opacity: 8%;
}

.button:focus-visible {
	--opacity: 12%;
}

.button:active {
	--opacity: 12%;
	box-shadow:
		0 1px 2px rgba(0, 0, 0, 0.3),
		0 2px 6px 2px rgba(0, 0, 0, 0.15);
}

.icon_wrapper {
	margin-right: -4px;
}
</style>