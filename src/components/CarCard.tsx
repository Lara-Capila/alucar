/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { calculateCarRent, generateCarImageUrl } from '../utils';
import { Button } from './Button';
import CardDetails from './CardDetails';
import { CarResponse } from './types/car';
import { DriveTranslations, TransmissionTranslations } from './types/translations';

interface CarCardProps {
  car: CarResponse
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    model, make,
    transmission, drive,
    city_mpg, year,
  } = car;

  const rentPrice = calculateCarRent(city_mpg, year);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <h2 className="text-lg font-semibold capitalize">
        {make}
        {' '}
        {model}
        {' '}
      </h2>

      <p className="flex mt-6 text-3xl font-extrabold">
        <span className="self-start text-sm font-semibold">
          R$
        </span>
        {rentPrice}
        <span className="self-end text-sm font-medium">/dia</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(car)} alt="car model" fill priority className="object-contain" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={18} height={18} alt="steering wheel" />
            <p className="text-sm capitalize">{TransmissionTranslations[transmission]}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={18} height={18} alt="seat" />
            <p className="text-xs uppercase text-center truncate md:max-w-[8rem]">
              {DriveTranslations[drive]}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={18} height={18} alt="seat" />
            <p className="text-sm text-center">
              {city_mpg}
              {' '}
              Km/litro
            </p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button.Root rounded onClick={() => setIsOpen(true)}>
            Ver mais
            <Button.Icon icon="ArrowRightCircleIcon" className="right-0" />
          </Button.Root>
        </div>
      </div>

      <CardDetails
        closeModal={() => setIsOpen(false)}
        isOpen={isOpen}
        car={car}
      />
    </div>
  );
};

export default CarCard;
