import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PathLink } from '../../core/enums/path-link.enum';
import { VehicleDto } from '../../core/models/backend/data-transfer-object';
import { ApiService } from '../../core/services/api/api.service';

/**
 * View of vehicle's details.
 */
@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-view.component.html',
  styleUrls: [ './vehicle-detail-view.component.scss' ]
})
export class VehicleDetailViewComponent implements OnInit {

  //region Fields
  private _vehicle!: VehicleDto;
  //endregion

  //region Constructor
  /**
   * Initialize a vehicle's view component.
   *
   * @param _apiService - The service that make HTTP request to the api
   * @param _route - Information about the route associated with the component.
   */
  constructor(private _apiService: ApiService, private _route: ActivatedRoute) { }
  //endregion

  //region Accessors
  /**
   * Vehicle DTO.
   */
  get vehicle(): VehicleDto {
    return this._vehicle;
  }
  //endregion

  //region Methods
  /**
   * Additional initialization tasks.
   */
  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    const vehicleObservable = this._apiService.getOneById(PathLink.VEHICLES, id) as Observable<VehicleDto>;
    vehicleObservable.subscribe((value: VehicleDto) => this._vehicle = value);
  }
  //endregion

}
