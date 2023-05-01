export type Tag = string;

export type GameSummary = {
	id: string,
	name: string,
	releaseYear: number,
	publisher: string,
	tags: Tag[],
	logoUrl: string
};
