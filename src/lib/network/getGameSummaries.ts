import type { GameSummary } from "$lib/types"

export type Response = {
	summaries: GameSummary[]
};

export default async function getGameSummaries(): Promise<Response> {
	return {
		summaries: [
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
			{
				id: "overwatch",
				name: "Overwatch 2",
				releaseYear: 2022,
				publisher: "Blizzard",
				tags: ["Шутер", "Multiplayer", "Онлайн"],
				logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Overwatch_2_full_logo.svg"
			},
		]
	}
}