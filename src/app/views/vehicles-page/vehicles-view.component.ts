import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathLink } from '../../core/enums/path-link.enum';
import { VehicleDto } from '../../core/models/backend/data-transfer-object';
import { LiteralObject } from '../../core/models/literal-object';
import { RowSmartTable } from '../../core/models/table/row-smart.table';
import { ApiService } from '../../core/services/api/api.service';
import { VehicleViewModel } from './vehicle-view.model';

/**
 * View of the vehicles list.
 */
@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-view.component.html',
  styleUrls: [ './vehicles-view.component.scss' ]
})
export class VehiclesViewComponent implements OnInit {

  //region Fields
  private readonly _settings: LiteralObject;
  private _vehicles: VehicleViewModel[] = [];
  //endregion

  //region Constructor
  /**
   * Initialize a vehicles view component.
   *
   * @param _apiService - The service that make HTTP request to the api
   * @param _router - The router
   */
  constructor(private _apiService: ApiService, private _router: Router) {
    this._settings = {
      actions: null,
      noDataMessage: 'Aucun véhicules trouvé',
      mode: 'external',
      columns: {
        companyName: {
          title: 'Entreprise',
          type: 'string'
        },
        licensePlate: {
          title: 'N° de plaque',
          type: 'string'
        },
        manufacturer: {
          title: 'Marque',
          type: 'string'
        },
        model: {
          title: 'Modèle',
          type: 'string'
        },
        priority: {
          title: 'Priorité',
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
   * Vehicles to use in the table.
   */
  get vehicles(): VehicleViewModel[] {
    return this._vehicles;
  }
  //endregion

  //region Methods
  //region Public methods
  /**
   * Additional initialization tasks
   */
  ngOnInit(): void {
    const vehiclesObservable = this._apiService.getAll(PathLink.VEHICLES) as Observable<VehicleDto[]>;
    vehiclesObservable.pipe(map(this.mapVehicles()))
                      .subscribe((values: VehicleViewModel[]) => this._vehicles = values);
  }

  /**
   * Event when a row is selected.
   *
   * @param row - The row of the table
   */
  async onRowSelected(row: RowSmartTable): Promise<void> {
    await this._router.navigate([ `${PathLink.VEHICLES}/${row.data.id}` ]);
  }
  //endregion

  //region Private methods
  private mapVehicles(): (values: VehicleDto[]) => VehicleViewModel[] {
    return (values: VehicleDto[]) => values.map((value: VehicleDto) => {
      const vehiclePageModel: VehicleViewModel = {
        id: value.id,
        companyName: value.driver.company.name,
        licensePlate: value.licensePlate,
        manufacturer: value.manufacturer,
        model: value.model,
        priority: value.priority
      };
      return vehiclePageModel;
    });
  }
  //endregion
  //endregion

}

