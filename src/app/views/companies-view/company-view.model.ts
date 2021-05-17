/**
 * Model used in the companies view.
 */
export interface CompanyViewModel {
  /**
   * Unique ID row number.
   */
  id: number;

  /**
   * Name of the company.
   */
  name: string;

  /**
   * Street address with street number.
   */
  address: string;

  /**
   * City with zip code in format "city / zip".
   */
  cityWithZip: string;

  /**
   * Phone number.
   */
  phone: string;

  /**
   * Email address.
   */
  email: string;
}
