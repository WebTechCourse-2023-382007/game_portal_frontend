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
</script>

<div class="wrapper">
	<input class="input" type="text" placeholder={label} bind:value>
	{#if label !== null}
		<span class="label" aria-hidden="true">{label}</span>
	{/if}
</div>

<style>
	.wrapper {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.input {
		width: 100%;
		padding: 16px;
		background-color: inherit;
		border: 1px solid var(--md-sys-color-outline);
		border-radius: 4px;

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

	.label {
		/* body-large */
		font-family: var(--md-sys-typescale-body-large-font-family-name);
		font-style: var(--md-sys-typescale-body-large-font-family-style);
		font-weight: var(--md-sys-typescale-body-large-font-weight);
		font-size: var(--md-sys-typescale-body-large-font-size);
		color: var(--md-sys-color-on-surface-variant);
		position: absolute;

		top: 16px;
		left: 16px;

		pointer-events: none;

		transition-duration: 200ms;
		transition-property: top, padding-right, padding-left, left, font-size;
		transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
	}

	.input:focus-visible + .label,
	.input:not(:placeholder-shown) + .label {
		/* body-small */
		font-family: var(--md-sys-typescale-body-small-font-family-name);
		font-style: var(--md-sys-typescale-body-small-font-family-style);
		font-weight: var(--md-sys-typescale-body-small-font-weight);
		font-size: var(--md-sys-typescale-body-small-font-size);

		top: -9px;
		left: 12px;

		background-color: var(--background-color);
		padding: 0 4px;
	}
</style>