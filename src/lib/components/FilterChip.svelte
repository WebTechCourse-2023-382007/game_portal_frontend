<script lang="ts">
	import Icon from "./Icon.svelte";

	export let text: string;
	export let checked = false;
</script>

<label class="md-label-large chip" class:checked>
	<input class="control" type="checkbox" bind:checked />

	<span class="wrapper">
		{#if checked}
			<div class="icon_wrapper">
				<Icon icon="done" --size="18px" />
			</div>
		{/if}
		{text}
	</span>
</label>

<style>
	.control {
		position: absolute;
		width: 0;
		height: 0;
		opacity: 0;
	}
	
	.chip,
	.wrapper {
		transition-duration: 200ms;
		transition-property: color, background-color, box-shadow, border-color;
		transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
	}

	.chip {
		border: 1px solid var(--md-sys-color-outline);
		border-radius: 100px;
		background-color: transparent;
		color: var(--md-sys-color-on-surface-variant);
	}

	.wrapper {
		width: 100%;
		height: 100%;
		border-radius: 100px;
		padding: 7px 15px;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 8px;

		color: inherit;
	}

	.chip:hover,
	.chip:focus-visible,
	.chip:focus-within {
		color: var(--md-sys-color-on-surface);
	}

	.chip:focus-visible,
	.chip:focus-within {
		border-color: var(--md-sys-color-on-surface);
	}

	.chip:hover .wrapper,
	.chip:focus-visible .wrapper,
	.chip:focus-within .wrapper {
		background-color: rgba(73, 69, 79, 8%);
	}

	.chip:active {
		color: var(--md-sys-color-on-surface);
	}

	.chip:active .wrapper {
		background-color: rgba(73, 69, 79, 12%);
	}

	.checked {
		border: none;
		color: var(--md-sys-color-on-secondary-container);
		background-color: var(--md-sys-color-secondary-container);
	}

	.checked .wrapper {
		padding: 8px 16px;
	}

	.checked:hover {
		box-shadow:
			0px 1px 2px rgba(0, 0, 0, 0.3),
			0px 1px 3px 1px rgba(0, 0, 0, 0.15);
		color: var(--md-sys-color-on-secondary-container);
	}

	.checked:hover .wrapper {
		background-color: rgba(29, 25, 43, 8%);
	}

	.checked:focus-visible,
	.checked:focus-within,
	.checked:active {
		box-shadow: none;
		color: var(--md-sys-color-on-secondary-container);
	}

	.checked:focus-visible .wrapper,
	.checked:focus-within .wrapper,
	.checked:active .wrapper {
		background-color: rgba(29, 25, 43, 12%);
	}

	.icon_wrapper {
		margin-left: -4px;
	}
</style>
