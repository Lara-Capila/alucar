/* eslint-disable @typescript-eslint/quotes */
import { get } from '../api';

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export const fetchCars = async ({
  model = "",
  manufacturer = "",
  fuel = "",
  limit = 10,
  year = 2015,
}: FilterProps) => {
  try {
    const { data } = await get({
      url: `make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    });

    return data;
  } catch (error) {
    return null;
  }
};
