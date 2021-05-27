import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { APP_TITLE } from '../core/constants';

import { MENU_ITEMS } from './menu-items';

/**
 * Layout of the application.
 */
@Component({
  selector: 'app-pages',
  templateUrl: './layout.component.html',
  styleUrls: ['layout.component.scss'],
})
export class LayoutComponent {

  //region Fields
  private readonly _menu: NbMenuItem[];
  private _title = APP_TITLE;
  //endregion

  //region Constructor
  /**
   * Initialize a layout component.
   */
  constructor() {
    this._menu = MENU_ITEMS;
  }
  //endregion

  //region Accessors
  /**
   * Title of the application.
   */
  get title(): string {
    return this._title;
  }

  /**
   * Menu in the sidebar.
   */
  get menu(): NbMenuItem[] {
    return this._menu;
  }
  //endregion
}
