'use client';

import { Combobox, Transition } from '@headlessui/react';
import {
  Dispatch, Fragment, SetStateAction, useState,
} from 'react';

import Image from 'next/image';
import { manufacturers } from './constants/manufacturers';

const SearchManufacturer = ({ manufacturer, setManufacturer }: {
  manufacturer: string
  setManufacturer: Dispatch<SetStateAction<string>>
}) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = query === ''
    ? manufacturers
    : manufacturers.filter((item) => item
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, '')));

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pr-2">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-2"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="
              w-full h-[48px]
              pl-12 p-4
              rounded-l-full max-sm:rounded-full
              bg-light-white outline-none
              cursor-pointer text-sm
            "
            defaultValue={(item: string) => item}
            placeholder="Volkswagen"
            onChange={(event) => setQuery(event.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className="
                absolute mt-1 max-h-60
                w-full overflow-auto
                rounded-md bg-white
                py-1 text-base
                shadow-lg ring-1 ring-black ring-opacity-5
                focus:outline-none sm:text-sm
              "
              static
            >
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className="cursor-default select-none py-2 pl-10 pr-4"
                >
                  {`Create ${query}`}
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`}
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {item}
                        </span>

                        {selected && (
                          <span
                            className={`
                              absolute inset-y-0 left-0 flex items-center pl-3 
                              ${active ? 'text-white' : 'text-pribg-primary-purple'}
                            `}
                          />
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
