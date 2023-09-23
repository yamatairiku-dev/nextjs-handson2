import { searchPthotos } from '@/lib/unsplash';

export const POST = async (request: Request) => {
  const { query }: { query: unknown } =
    await request.json();
  if (!query || typeof query !== 'string') {
    const response = new Response('no query', {
      status: 400,
    });
    return response;
  }
  const searchPthotosResponse = await searchPthotos(query);
  return new Response(
    JSON.stringify(searchPthotosResponse),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
