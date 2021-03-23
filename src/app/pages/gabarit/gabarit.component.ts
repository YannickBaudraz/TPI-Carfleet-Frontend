import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { APP_TITLE } from '../../core/constants';

import { MENU_ITEMS } from '../menu-items';

@Component({
  selector: 'app-pages',
  templateUrl: './gabarit.component.html',
  styleUrls: ['gabarit.component.scss'],
})
export class GabaritComponent implements OnInit {
  title = APP_TITLE;
  menu: NbMenuItem[];

  constructor() {
    this.menu = MENU_ITEMS;
  }

  ngOnInit(): void {}
}
