/* eslint-disable consistent-return */

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { updateSearchParams } from '../utils';
import SearchManufacturer from './SearchManufacturer';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (manufacturer.trim() === '' && model.trim() === '') {
      return alert('Please enter value');
    }

    const pathName = updateSearchParams({
      model: model.toLocaleLowerCase(),
      manufacturer: manufacturer.toLocaleLowerCase(),
    });

    router.push(pathName, { scroll: false });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex items-center justify-start
        max-sm:flex-col w-full relative
        max-sm:gap-4 max-w-3xl
      "
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model icon"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          placeholder="Tiguan..."
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
