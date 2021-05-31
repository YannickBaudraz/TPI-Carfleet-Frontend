import { PathLink } from './enums/path-link.enum';

/**
 * Title of the application.
 */
export const APP_TITLE = 'CarFleet';

/**
 * Base url for the api.
 */
export const API_BASE_URL = 'http://localhost:3000/api';

/**
 * Url for the companies path in the api.
 */
export const API_COMPANIES_URL = `${API_BASE_URL}/${PathLink.Companies}`;

/**
 * Url for the drivers path in the api.
 */
export const API_DRIVERS_URL = `${API_BASE_URL}/${PathLink.Drivers}`;

/**
 * Url for the vehicles path in the api.
 */
export const API_VEHICLES_URL = `${API_BASE_URL}/${PathLink.Vehicles}`;

/**
 * Url for the users path in the api.
 */
export const API_USERS_URL = `${API_BASE_URL}/${PathLink.Users}`;
