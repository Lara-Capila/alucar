export enum FuelType {
  gas = 'Gás',
  diesel = 'Diesel',
  electricity = 'Elétrico',
}

export enum DriveTransmission {
  fwd = 'fwd',
  rwd = 'rwd',
  awd = 'awd',
  '4wd' = '4wd',
}

export enum Transmission {
  m = 'm',
  a = 'a',
}

export interface CarResponse {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: DriveTransmission;
  fuel_type: FuelType;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: Transmission;
  year: number;
}
