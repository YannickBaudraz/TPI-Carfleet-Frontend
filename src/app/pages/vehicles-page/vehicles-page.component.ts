import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathLink } from '../../core/enums/path-link.enum';
import { Vehicle } from '../../core/models/backend/dto';
import { LiteralObject } from '../../core/models/literal-object';
import { RowSmartTable } from '../../core/models/table/row-smart.table';
import { ApiService } from '../../core/services/api/api.service';
import { VehiclePageModel } from './vehicle-page.model';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: [ './vehicles-page.component.scss' ]
})
export class VehiclesPageComponent implements OnInit {

  settings: LiteralObject;
  private _vehicles: VehiclePageModel[] = [];

  constructor(private _apiService: ApiService, private _router: Router) {
    this.settings = {
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

  get vehicles(): VehiclePageModel[] {
    return this._vehicles;
  }

  ngOnInit(): void {
    const vehiclesObservable = this._apiService.getAll(PathLink.VEHICLES) as Observable<Vehicle[]>;
    vehiclesObservable.pipe(map(this.mapVehicles()))
                      .subscribe((values: VehiclePageModel[]) => this._vehicles = values);
  }

  async onRowSelected(value: RowSmartTable): Promise<void> {
    await this._router.navigate([ `vehicles/${value.data.id}` ]);
  }

  private mapVehicles(): (values: Vehicle[]) => VehiclePageModel[] {
    return (values: Vehicle[]) => values.map((value: Vehicle) => {
      const vehiclePageModel: VehiclePageModel = {
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

}

