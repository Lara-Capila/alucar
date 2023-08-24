/* eslint-disable react/no-array-index-key */
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
    <div className="mt-12 padding-y padding-x max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100 mb-8">
        <h1 className="text-4xl font-extrabold">Catálogo de carros</h1>
        <p>Descubra os carros que podem te interessar</p>
      </div>
      <SearchBar />
      {isDataEmpty ? (
        <NotFound />
      ) : (
        <section>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-10 mt-10">
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
        </section>
      )}
    </div>
  );
};

export default Catalogue;
