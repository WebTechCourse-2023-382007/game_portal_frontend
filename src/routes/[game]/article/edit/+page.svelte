<script lang="ts">
	import FilledButton from "$lib/components/FilledButton.svelte";
	import ChipButton from "$lib/components/ChipButton.svelte";
	import TonalIconButton from "$lib/components/TonalIconButton.svelte";
	import TextField from "$lib/components/TextField.svelte";
	import OutlinedButton from "$lib/components/OutlinedButton.svelte";
	import Menu from "$lib/components/Menu.svelte";
	import type { MenuItem } from "$lib/components/Menu.svelte";

	export let data: {
		name: string,
		year: number,
		developer: string,
		tags: number[]
		allTags: { [key: number]: string }
	};

	let showMenu = false;

	let selectedTags = data.tags;

	$: unselectedTagKeys = Object
		.keys(data.allTags)
		.map(rawKey => Number.parseInt(rawKey, 10))
		.filter(key => !selectedTags.includes(key));

	$: menuItems = unselectedTagKeys
		.map(key => { return { id: key, label: data.allTags[key] } }) as MenuItem[];

	function onSubmit(event) {
		const data = new FormData(event.target);

		const dataObject = {};
		for (let field of data) {
			const [key, value] = field;
			dataObject[key] = value;
		}

		console.log(dataObject);
	}
</script>

<svelte:head>
	<title>{data.name} | Редактирование — Game Portal</title>
</svelte:head>

<div class="wrapper">
	<form
		class="form"
	  on:submit|preventDefault={onSubmit}
	>
		<main class="main">
			<textarea
				class="main__textarea"
				name="article_text"
				placeholder="Введите текст..."
			></textarea>
		</main>

		<aside class="aside">
			<section id="inputs" class="inputs">
				<TextField
					bind:value={data.name}
					name="name"
					label="Название игры"
					--background-color="var(--md-sys-color-surface-container-low)"
				/>
				<TextField
					bind:value={data.year}
					name="year"
					label="Год выхода"
					--background-color="var(--md-sys-color-surface-container-low)"
				/>
				<TextField
					bind:value={data.developer}
					name="developer"
					label="Название студии"
					--background-color="var(--md-sys-color-surface-container-low)"
				/>
			</section>

			<section id="tags" class="tags">
				<ul class="gp-display-contents">
					{#each selectedTags as tag}
						<li class="gp-display-contents">
							<ChipButton
								text={data.allTags[tag]}
								trailingIcon="close"
								on:click={() => selectedTags = selectedTags.filter(x => x !== tag)}
							/>
						</li>
					{/each}
				</ul>
				{#if unselectedTagKeys.length !== 0}
					<Menu
						bind:show={showMenu}
						items={menuItems}
						onItemSelect={(key) => selectedTags = [...selectedTags, key]}
					>
						<TonalIconButton
							icon="add"
							label="Добавить тег"
							on:click={() => showMenu = !showMenu}
						/>
					</Menu>
				{/if}
			</section>

			<section id="controls" class="submit">
				<FilledButton type="submit" text="Сохранить" />
				<OutlinedButton text="Отмена" />
			</section>
		</aside>
	</form>
</div>

<style>
	:global(body) {
		background-color: var(--md-sys-color-surface-container);
	}

	.wrapper {
		block-size: 100dvh;
	}

	.form {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: center;
		gap: 16px;

		max-inline-size: 1104px;
		inline-size: 100%;
		min-block-size: 100%;

		margin-inline: auto;
	}

	.aside {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: 20px;

		flex-shrink: 0;

		inline-size: 312px;

		padding: 28px;
		border-radius: 24px;

		background-color: var(--md-sys-color-surface-container-low);
	}

	.inputs {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 12px;
	}

	.tags,
	.submit {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.tags {
		flex-wrap: wrap;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: stretch;

		inline-size: 100%;
		block-size: 100dvh;

		padding: 36px;
		border-radius: 24px 24px 0 0;
		background-color: var(--md-sys-color-surface);
	}

	.main__textarea {
		inline-size: 100%;
		block-size: 100%;

		padding: 0;
		border: none;
		outline: none;
		background-color: unset;

		color: var(--md-sys-color-on-surface);
		/* body-medium */
		font-family: "IBM Plex Mono", monospace;
		font-style: var(--md-sys-typescale-body-medium-font-family-style);
		font-weight: var(--md-sys-typescale-body-medium-font-weight);
		font-size: var(--md-sys-typescale-body-medium-font-size);

		resize: none;
		scrollbar-gutter: stable;
	}

	.main__textarea::-webkit-scrollbar {
		inline-size: 12px;
	}

	.main__textarea::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 10px 10px var(--md-sys-color-outline);

		border-style: solid;
		border-width: 4px;
		border-color: transparent;
		border-radius: 100px;
	}
</style>
