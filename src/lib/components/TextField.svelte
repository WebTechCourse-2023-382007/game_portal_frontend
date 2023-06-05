<!--
	@component

	Представляет собой текстовый инпут. Для корректной работы
	label-а нужно передать цвет заднего фона, на котором
	расположен `<TextField />` через CSS Variable
	`--background-color`.
-->

<script lang="ts">
	export let label: string | null = null;
	export let value: string;
	export let name: string | null = null;
</script>

<div class="wrapper">
	<input
		class="input"
		type="text"
		placeholder={label}
		{name}
		bind:value
	>
	{#if label !== null}
		<span class="label" aria-hidden="true">{label}</span>
	{/if}
</div>

<style>
	.wrapper {
		position: relative;
		inline-size: 100%;
		block-size: 100%;
	}

	.input,
	.input + .label {
		transition-duration: 200ms;
		transition-timing-function: var(--md-sys-motion-easing-standard);
	}

	.input {
		transition-property: outline-width, outline-color;
	}

	.input + .label {
		transition-property: color, top, padding-right, padding-left, left, font-size;
	}

	.input {
		inline-size: 100%;
		padding: 16px;
		background-color: inherit;
		border: none;
		border-radius: 4px;
		outline: var(--md-sys-color-outline) solid 1px;

		/* body-large */
		font-family: var(--md-sys-typescale-body-large-font-family-name);
		font-style: var(--md-sys-typescale-body-large-font-family-style);
		font-weight: var(--md-sys-typescale-body-large-font-weight);
		font-size: var(--md-sys-typescale-body-large-font-size);

		color: var(--md-sys-color-on-surface);
	}

	.input::placeholder {
		color: transparent;
	}

	.input:hover {
		outline-color: var(--md-sys-color-on-surface);
	}

	.input:hover + .label {
		color: var(--md-sys-color-on-surface);
	}

	.input:focus-visible {
		outline-color: var(--md-sys-color-primary);
		outline-width: 2px;
	}

	.input:focus-visible + .label {
		color: var(--md-sys-color-primary);
	}

	.label {
		/* body-large */
		font-family: var(--md-sys-typescale-body-large-font-family-name);
		font-style: var(--md-sys-typescale-body-large-font-family-style);
		font-weight: var(--md-sys-typescale-body-large-font-weight);
		font-size: var(--md-sys-typescale-body-large-font-size);
		color: var(--md-sys-color-on-surface-variant);
		position: absolute;

		inset-block-start: 16px;
		inset-inline-start: 16px;

		pointer-events: none;
	}

	.input:focus-visible + .label,
	.input:not(:placeholder-shown) + .label {
		/* body-small */
		font-family: var(--md-sys-typescale-body-small-font-family-name);
		font-style: var(--md-sys-typescale-body-small-font-family-style);
		font-weight: var(--md-sys-typescale-body-small-font-weight);
		font-size: var(--md-sys-typescale-body-small-font-size);

		inset-block-start: -9px;
		inset-inline-start: 12px;

		background-color: var(--background-color);
		padding: 0 4px;
	}
</style>
