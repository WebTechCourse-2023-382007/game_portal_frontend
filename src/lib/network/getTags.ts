import type { Tag } from "$lib/types";

export type Response = {
	tags: Tag[];
};

export default async function getTags(): Promise<Response> {
	return {
		tags: [
			"Приключение",
			"Сюжет",
			"MMORPG",
			"Стратегия",
			"Хоррор",
			"Симулятор",
			"Шутер",
			"Sandbox",
			"Multiplayer",
			"Онлайн",
			"Классика",
			"Singleplayer",
			"Платформер"
		]
	}
}
