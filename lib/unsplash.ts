import 'server-only';
import { Photo, PhotoSearchResponse } from '@/lib/type';

export const getRamdomPhotos = async (): Promise<
  Photo[]
> => {
  const params = new URLSearchParams();
  params.append(
    'client_id',
    process.env.UNSPLASH_API_ACCESS_KEY ?? ''
  );
  params.append('count', '30');
  const response = await fetch(
    `https://api.unsplash.com/photos/random?${params.toString()}`,
    { method: 'GET', next: { revalidate: 60 * 30 } }
  );
  return response.json();
};

export const searchPthotos = async (
  query: string
): Promise<PhotoSearchResponse> => {
  const params = new URLSearchParams();
  params.append(
    'client_id',
    process.env.UNSPLASH_API_ACCESS_KEY ?? ''
  );
  params.append('query', query);
  params.append('per_page', '30');
  const response = await fetch(
    `https://api.unsplash.com/search/photos?${params.toString()}`,
    { method: 'GET', next: { revalidate: 60 * 30 } }
  );
  return response.json();
};
