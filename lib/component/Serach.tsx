'use client';

import { Photo, PhotoSearchResponse } from '@/lib/type';
import {
  FunctionComponent,
  useState,
  useTransition,
} from 'react';
import { VscSearch } from 'react-icons/vsc';
import { Loading } from './Loading';
import { PhotoList } from './PhotoList';

const PhotoListWrapper: FunctionComponent<{
  loading: boolean;
  searchedPhotos: Photo[] | null;
  randomPhotos: Photo[];
}> = ({ loading, searchedPhotos, randomPhotos }) => {
  if (loading) {
    return <Loading />;
  }
  if (searchedPhotos) {
    return <PhotoList photos={searchedPhotos} />;
  }
  return <PhotoList photos={randomPhotos} />;
};

export const Search: FunctionComponent<{
  randomPhotos: Photo[];
}> = ({ randomPhotos }) => {
  const [query, setQuery] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [serchedPhotos, setSearchedPhotos] = useState<
    Photo[] | null
  >(null);
  const [loading, startTrasition] = useTransition();
  return (
    <div>
      <div className="my-8 flex justify-center">
        <input
          className="mr-4 w-96 bg-gray-700"
          value={query ?? ''}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="bg-gray-700 px-4 py-2"
          onClick={async () => {
            setSearching(true);
            const response = await fetch(
              `http://localhost:3000/api/search`,
              {
                method: 'POST',
                body: JSON.stringify({ query }), //javascript objectをjsonに変換
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            const json: PhotoSearchResponse =
              await response.json(); //jsonをjavascript objectに変換
            startTrasition(() => {
              setSearchedPhotos(json.results);
            });
            setSearching(false);
          }}
        >
          <VscSearch />
        </button>
      </div>
      <PhotoListWrapper
        loading={searching || loading}
        searchedPhotos={serchedPhotos}
        randomPhotos={randomPhotos}
      />
    </div>
  );
};
