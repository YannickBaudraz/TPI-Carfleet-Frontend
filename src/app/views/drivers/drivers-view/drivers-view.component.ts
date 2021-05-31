import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathLink } from '../../../core/enums/path-link.enum';
import { DriverDto } from '../../../core/models/backend/data-transfer-object';
import { LiteralObject } from '../../../core/models/literal-object';
import { RowSmartTable } from '../../../core/models/table/row-smart.table';
import { ApiService } from '../../../core/services/api/api.service';
import { DriverViewModel } from './driver-view.model';

/**
 * View of the drivers list.
 */
@Component({
  selector: 'app-drivers-page',
  templateUrl: './drivers-view.component.html',
  styleUrls: [ './drivers-view.component.scss' ]
})
export class DriversViewComponent implements OnInit {

  //region Fields
  private readonly _settings: LiteralObject;
  private _drivers: DriverViewModel[] = [];
  //endregion

  //region Constructor
  /**
   * Instantiate a drivers view component.
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
  //endregion

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
  get drivers(): DriverViewModel[] {
    return this._drivers;
  }
  //endregion

  //region Methods
  //region Public methods
  /**
   * Additional initialization tasks.
   */
  ngOnInit(): void {
    const driversObservable = this._apiService.getAll(PathLink.Drivers) as Observable<DriverDto[]>;
    driversObservable.pipe(map(this.mapDrivers()))
                     .subscribe((values: DriverViewModel[]) => this._drivers = values);
  }

  /**
   * Event when a row is selected.
   *
   * @param row - The row of the table
   */
  async onRowSelected(row: RowSmartTable): Promise<void> {
    await this._router.navigate([ `${PathLink.Drivers}/${row.data.id}` ]);
  }
  //endregion

  //region Private methods
  private mapDrivers(): (values: DriverDto[]) => DriverViewModel[] {
    return (values: DriverDto[]) => values.map((value: DriverDto) => {
      const vehiclePageModel: DriverViewModel = {
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
  //endregion

}
