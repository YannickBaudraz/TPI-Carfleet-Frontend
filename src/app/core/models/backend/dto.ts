export abstract class AbstractDto {
}

export interface Company extends AbstractDto {
  id: number;
  name: string;
}

export interface Driver extends AbstractDto {
  id: number;
  firstname: string;
  lastname: string;
  company: Company;
}

export interface Vehicle extends AbstractDto {
  id: number;
  driverId: number;
  driverCompanyId: number;
  licensePlate: string;
  manufacturer: string;
  model: string;
  vin: string;
  exteriorColor: string;
  registration: string;
  type: string;
  introductionl: Date;
  insurance: string;
  fuel: string;
  transmission: string;
  priority: string;
  diagnosis: string;
  support: string;
  notes: string;
  vehiclescol: string;
  driver: Driver;
}