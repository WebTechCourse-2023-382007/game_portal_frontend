import getGameSummaries from "$lib/network/getGameSummaries";
import getTags from "$lib/network/getTags";

export async function load() {
	const tags = await getTags();
	const summaries = await getGameSummaries();

	return { ...tags, ...summaries };
}
