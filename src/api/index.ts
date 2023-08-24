import { CarResponse } from '../components/types/car';

const apiUrl = `${process.env.API_URL}/cars?`;

export const get = async ({ url }: { url: string }) => {
  console.log(apiUrl);
  const response = await fetch(apiUrl + url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  });

  return {
    status: response.status,
    data: await response.json() as CarResponse[],
  };
};
