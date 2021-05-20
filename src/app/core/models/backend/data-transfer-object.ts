import { Gender } from '../../enums/gender';

/**
 * DTO received from the backend. Designed to be the parent of DTOs.
 */
export interface DataTransferObject {
  /**
   * Unique ID row number.
   */
  id: number;
}

/**
 * Company received from the backend.
 */
export interface CompanyDto extends DataTransferObject {
  /**
   * Name of the company.
   */
  name: string;

  /**
   * Street address with street number.
   */
  address: string;

  /**
   * Name of the city.
   */
  city: string;

  /**
   * Zip code.
   */
  zip: string;

  /**
   * Name of the canton.
   */
  canton: string;

  /**
   * Phone number.
   */
  phone: string;

  /**
   * Email address.
   */
  email: string;

  /**
   * Url of the website.
   */
  websiteUrl: string;

  /**
   * Color in hexadecimal.
   */
  color: string;

  /**
   * Companies col.
   */
  companiescol: string;
}

/**
 * Driver received from the backend.
 */
export interface DriverDto extends DataTransferObject {
  /**
   * Gender.
   */
  gender: Gender;

  /**
   * Firstname.
   */
  firstname: string;

  /**
   * Lastname.
   */
  lastname: string;

  /**
   * Job title.
   */
  jobTitle: string;

  /**
   * Phone number.
   */
  phoneNumber: string;

  /**
   * Email.
   */
  email: string;

  /**
   * Company Data Transfer Object.
   */
  company: CompanyDto;
}

/**
 * Vehicle received from the backend.
 */
export interface VehicleDto extends DataTransferObject {
  /**
   * Unique license plate.
   */
  licensePlate: string;

  /**
   * Name of the manufacturer.
   */
  manufacturer: string;

  /**
   * Name of the model.
   */
  model: string;

  /**
   * Vehicle Identification Number.
   */
  vin: string;

  /**
   * Name of the exterior color.
   */
  exteriorColor: string;

  /**
   * Registration number.
   */
  registration: string;

  /**
   * Type code.
   */
  type: string;

  /**
   * Introduction date.
   */
  introductionl: Date;

  /**
   * Name of the insurance.
   */
  insurance: string;

  /**
   * Fuel type.
   */
  fuel: string;

  /**
   * Transmission type.
   */
  transmission: string;

  /**
   * Priority type.
   */
  priority: string;

  /**
   * Diagnosis type.
   */
  diagnosis: string;

  /**
   * Support type.
   */
  support: string;

  /**
   * Notes for help.
   */
  notes: string;

  /**
   * Col number.
   */
  vehiclescol: string;

  /**
   * Driver data transfer object.
   */
  driver: DriverDto;
}
