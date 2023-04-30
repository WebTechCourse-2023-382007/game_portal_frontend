<script context="module" lang="ts">
	export type Icons = "done";
</script>

<script lang="ts">
	import DoneIcon from "$lib/icons/DoneIcon.svelte";

	export let icon: Icons;
</script>

<div>
	{#if icon === "done"}
		<DoneIcon />
	{:else}
		UNREACHABLE
	{/if}
</div>
