import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathLink } from '../../core/enums/path-link.enum';
import { Driver } from '../../core/models/backend/dto';
import { LiteralObject } from '../../core/models/literal-object';
import { RowSmartTable } from '../../core/models/table/row-smart.table';
import { ApiService } from '../../core/services/api/api.service';
import { DriverPageModel } from './driver-page.model';

@Component({
  selector: 'app-drivers-page',
  templateUrl: './drivers-page.component.html',
  styleUrls: [ './drivers-page.component.scss' ]
})
export class DriversPageComponent implements OnInit {

  private readonly _settings: LiteralObject;
  private _drivers: DriverPageModel[] = [];

  /**
   * Initialize the component.
   *
   * @param _apiService - The service that make HTTP request to the api
   * @param _router - The router
   */
  constructor(private _apiService: ApiService, private _router: Router) {
    this._settings = {
      actions: null,
      noDataMessage: 'Aucun contacts trouvé',
      mode: 'external',
      columns: {
        companyName: {
          title: 'Entreprise',
          type: 'string'
        },
        firstname: {
          title: 'Prénom',
          type: 'string'
        },
        lastname: {
          title: 'Nom de famille',
          type: 'string'
        },
        phoneNumber: {
          title: 'Téléphone',
          type: 'string'
        },
        email: {
          title: 'Email professionnel',
          type: 'string'
        }
      }
    };
  }

  //region Accessors
  /**
   * Settings for the smart-table.
   */
  get settings(): LiteralObject {
    return this._settings;
  }

  /**
   * Drivers to use in the table.
   */
  get drivers(): DriverPageModel[] {
    return this._drivers;
  }
  //endregion

  //region Methods
  ngOnInit(): void {
    const driversObservable = this._apiService.getAll(PathLink.DRIVERS) as Observable<Driver[]>;
    driversObservable.pipe(map(this.mapDrivers()))
                     .subscribe((values: DriverPageModel[]) => this._drivers = values);
  }

  /**
   * Event when a row is selected.
   *
   * @param row - The row of the table
   */
  async onRowSelected(row: RowSmartTable): Promise<void> {
    await this._router.navigate([ `drivers/${row.data.id}` ]);
  }

  private mapDrivers(): (values: Driver[]) => DriverPageModel[] {
    return (values: Driver[]) => values.map((value: Driver) => {
      const vehiclePageModel: DriverPageModel = {
        id: value.id,
        companyName: value.company.name,
        firstname: value.firstname,
        lastname: value.lastname,
        phoneNumber: value.phoneNumber,
        email: value.email
      };
      return vehiclePageModel;
    });
  }
  //endregion

}
