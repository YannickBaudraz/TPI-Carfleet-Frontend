import { NbMenuItem } from '@nebular/theme';
import { PathLink } from '../core/enums/path-link.enum';

/**
 * Drivers menu item.
 */
const drivers: NbMenuItem = {
  title: 'Contacts',
  icon: 'phone-outline',
  link: `/${PathLink.Drivers}`,
  home: true
};

/**
 * Vehicles menu item.
 */
const vehicles: NbMenuItem = {
  title: 'Véhicules',
  icon: 'car-outline',
  link: `/${PathLink.Vehicles}`
};

/**
 * Companies menu item.
 */
const companies: NbMenuItem = {
  title: 'Entreprises',
  icon: 'briefcase-outline',
  link: `/${PathLink.Companies}`
};

/**
 * Users menu item.
 */
const users: NbMenuItem = {
  title: 'Utilisateurs',
  icon: 'people-outline',
  link: `/${PathLink.Users}`
};

/**
 * An array of {@link NbMenuItem} for the sidebar.
 */
export const MENU_ITEMS: NbMenuItem[] = [ drivers, vehicles, companies, users ];
