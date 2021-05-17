/**
 * Model used in the drivers view.
 */
export interface DriverViewModel {
  /**
   * Unique ID row number.
   */
  id: number;

  /**
   * Name of the company.
   */
  companyName: string;

  /**
   * Firstname.
   */
  firstname: string;

  /**
   * Lastname.
   */
  lastname: string;

  /**
   * Phone number.
   */
  phoneNumber: string;

  /**
   * Email address.
   */
  email: string;
}
