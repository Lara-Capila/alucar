import { CarResponse } from '../components/types/car';

export const generateCarImageUrl = (car: CarResponse, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = ({ manufacturer, model, limit }: {
  model?: string
  manufacturer?: string
  limit?: string
}) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (model) {
    searchParams.set('model', model);
  } else {
    searchParams.delete('model');
  }

  if (manufacturer) {
    searchParams.set('manufacturer', manufacturer);
  } else {
    searchParams.delete('manufacturer');
  }

  if (limit) {
    searchParams.set('limit', limit);
  } else {
    searchParams.delete('limit');
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
