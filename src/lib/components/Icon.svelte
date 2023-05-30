<script context="module" lang="ts">
	export type Icons = "done" | "search" | "edit" | "add";
</script>

<script lang="ts">
	import DoneIcon from "$lib/icons/DoneIcon.svelte";
	import SearchIcon from "$lib/icons/SearchIcon.svelte";
	import EditIcon from "$lib/icons/EditIcon.svelte";
	import AddIcon from "$lib/icons/AddIcon.svelte";

	export let icon: Icons;
</script>

<div class="icon">
	{#if icon === "done"}
		<DoneIcon />
	{:else if icon === "search"}
		<SearchIcon />
	{:else if icon === "edit"}
		<EditIcon />
	{:else if icon === "add"}
		<AddIcon />
	{:else}
		UNREACHABLE
	{/if}
</div>

<style>
	.icon {
		color: inherit;
		flex-shrink: 0;
		font-size: var(--size, 24px);
	}
</style>
