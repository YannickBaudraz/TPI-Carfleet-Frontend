/**
 * Model used in the vehicles view.
 */
export interface VehicleViewModel {
  /**
   * Unique ID row number.
   */
  id: number;

  /**
   * Name of the company.
   */
  companyName: string;

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
   * Priority type.
   */
  priority: string;
}
