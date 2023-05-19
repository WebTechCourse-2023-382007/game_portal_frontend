<script lang="ts">
	export let text: string;
</script>

<button class="md-label-large button" on:click>
	{text}
</button>

<style>
.button {
	--opacity: 0%;

	border-radius: 8px;
	background-color: color-mix(in srgb, var(--md-sys-color-secondary-container), var(--md-sys-color-on-secondary-container) var(--opacity));
	padding: 6px 12px;

	transition-duration: 200ms;
	transition-property: background-color, box-shadow;
	transition-timing-function: cubic-bezier(0.2, 0, 0, 1);

	color: var(--md-sys-color-on-secondary-container);
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
</style>