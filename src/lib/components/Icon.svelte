<script context="module" lang="ts">
	export type Icons = "done" | "search";
</script>

<script lang="ts">
	import DoneIcon from "$lib/icons/DoneIcon.svelte";
	import SearchIcon from "$lib/icons/SearchIcon.svelte";

	export let icon: Icons;
</script>

<div class="icon">
	{#if icon === "done"}
		<DoneIcon />
	{:else if icon === "search"}
		<SearchIcon />
	{:else}
		UNREACHABLE
	{/if}
</div>

<style>
	.icon {
		color: inherit;
		flex-shrink: 0;
	}
</style>
