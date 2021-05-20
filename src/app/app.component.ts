import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Main component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  /**
   * Initialize the component.
   *
   * @param titleService - Service to set the title of the page
   */
  constructor(private titleService: Title) {
    this.titleService.setTitle('TPICarfleetFronted');
  }
}
