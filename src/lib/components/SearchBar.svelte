<script lang="ts">
	import Icon from "./Icon.svelte";

	export let input: string;
	export let placeholder: string | undefined = undefined;
</script>

<div class="wrapper md-surface-container-high md-on-surface-text md-body-large">
	<Icon icon="search" --size="24px" />
	<input
		type="text"
		bind:value={input}
		placeholder={placeholder}
		class="input"
	/>
</div>

<style>
	.wrapper {
		inline-size: 100%;
		block-size: 56px;
		border-radius: 28px;
		padding: 4px 16px;

		display: flex;
		flex-direction: row;
		gap: 16px;
		align-items: center;
		justify-content: center;
	}

	.input {
		background: none;
		border: none;
		color: inherit;
		flex-grow: 1;
		block-size: 100%;
		padding: 0;
	}

	.input:focus-visible {
		outline: none;
	}

	.input::placeholder {
		color: var(--md-sys-color-on-surface-variant);
		opacity: 0.5;
	}
</style>
