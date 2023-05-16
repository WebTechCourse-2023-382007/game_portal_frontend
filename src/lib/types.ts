export type Tag = {
	id: number,
	label: string
};

export type GameSummary = {
	id: string,
	name: string,
	releaseYear: number,
	publisher: string,
	tags: Tag["id"][],
	logoUrl: string
};
