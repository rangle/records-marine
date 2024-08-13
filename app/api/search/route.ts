import data from './data.json'

function searchIndex(query: string | null) {
  //TODO: this should hit algolia or some other search service
  return data;
}

export async function POST(req: Request) {
  const query = await req.json();
  const search = query["search"];
  if (search === null) {
    return Response.json({ error: "Search query is required)" }, { status: 400 });
  }
  const results =  searchIndex(search?.toString());

  return Response.json(results);
}
