import { NbMenuItem } from '@nebular/theme';

/**
 * Drivers menu item.
 */
const drivers: NbMenuItem = {
  title: 'Contacts',
  icon: 'people-outline',
  link: '/drivers',
  home: true
};

/**
 * Vehicles menu item.
 */
const vehicles: NbMenuItem = {
  title: 'Véhicules',
  icon: 'car-outline',
  link: '/vehicles'
};

/**
 * Companies menu item.
 */
const companies: NbMenuItem = {
  title: 'Entreprises',
  icon: 'briefcase-outline',
  link: '/companies'
};

/**
 * An array of {@link NbMenuItem} for the sidebar.
 */
export const MENU_ITEMS: NbMenuItem[] = [ drivers, vehicles, companies ];
