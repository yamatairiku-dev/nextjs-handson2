'use client';

import { FunctionComponent } from 'react';
import { VscLoading } from 'react-icons/vsc';

export const Loading: FunctionComponent = () => {
  return (
    <div className="flex h-96 justify-center">
      <VscLoading className="my-auto h-auto animate-spin text-4xl text-gray-400" />
    </div>
  );
};
