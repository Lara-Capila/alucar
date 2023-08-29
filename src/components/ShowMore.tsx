'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { updateSearchParams } from '../utils/funtions';
import { Button } from './Button';

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore: FC<ShowMoreProps> = ({ isNext, pageNumber }) => {
  const router = useRouter();
  const params = useSearchParams();

  const model = params.get('model');
  const manufacturer = params.get('manufacturer');

  const handleClick = () => {
    const newLimit = (pageNumber + 1) * 10;
    const pathName = updateSearchParams({
      manufacturer: manufacturer || '',
      model: model || '',
      limit: `${newLimit}`,
    });

    router.push(pathName, { scroll: false });
  };

  return (
    <div className="flex-center mt-10 w-full">
      {!isNext && (
        <Button.Root
          rounded
          className="w-36"
          onClick={handleClick}
        >
          <p>Ver mais</p>
        </Button.Root>
      )}
    </div>
  );
};

export default ShowMore;
