'use client';

/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import { FC } from 'react';

import { FilterProps, fetchCars } from '../services';
import CarCard from './CarCard';
import NotFound from './NotFound';
import SearchBar from './SearchBar';
import ShowMore from './ShowMore';

interface CatalogueProps {
  searchParams: FilterProps
}

const Catalogue: FC<CatalogueProps> = async ({ searchParams }) => {
  const {
    fuel, limit, manufacturer,
    model, year,
  } = searchParams;

  const cars = await fetchCars({
    model,
    manufacturer,
    fuel,
    limit,
    year,
  });

  const isDataEmpty = !Array.isArray(cars) || !cars.length || !cars;

  return (
    <div className="padding-y padding-x max-w-screen-2xl mx-auto" id="catalogue">
      <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100 mb-8">
        <h1 className="text-4xl font-extrabold">Catálogo de carros</h1>
        <p>Descubra os carros que podem te interessar</p>
      </div>
      <SearchBar />
      {isDataEmpty ? (
        <NotFound />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <div
            className="
              grid 2xl:grid-cols-4 xl:grid-cols-3
              md:grid-cols-3 grid-cols-1 w-full gap-10 mt-10
            "
          >
            {
              cars.map((car, index) => (
                <CarCard car={car} key={index + car.model} />
              ))
            }
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > cars.length}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Catalogue;
