import type { Tag } from "$lib/types";

export type Response = {
	tags: Tag[];
};

export default async function getTags(): Promise<Response> {
	return {
		tags: [
			{ id: 1, label: "Приключение" },
			{ id: 2, label: "Сюжет" },
			{ id: 3, label: "MMORPG" },
			{ id: 4, label: "Стратегия" },
			{ id: 5, label: "Хоррор" },
			{ id: 6, label: "Симулятор" },
			{ id: 7, label: "Шутер" },
			{ id: 8, label: "Sandbox" },
			{ id: 9, label: "Multiplayer" },
			{ id: 10, label: "Онлайн" },
			{ id: 11, label: "Классика" },
			{ id: 12, label: "Singleplayer" },
			{ id: 13, label: "Платформер" },
		]
	}
}
