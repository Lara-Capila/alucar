import { DriveTransmission, FuelType, Transmission } from './car';

export const TransmissionTranslations: Record<string, string> = {
  [Transmission.a]: 'automático',
  [Transmission.m]: 'manual',
};

export const DriveTranslations: Record<string, string> = {
  [DriveTransmission.fwd]: 'tração dianteira',
  [DriveTransmission.rwd]: 'tração traseira',
  [DriveTransmission.awd]: 'tração integral',
  [DriveTransmission['4wd']]: 'tração nas quatro rodas',
};

export const FuelTranslations: Record<string, string> = {
  [FuelType.gas]: 'gasolina',
  [FuelType.electricity]: 'elétrico',
  [FuelType.diesel]: 'diesel',
};
