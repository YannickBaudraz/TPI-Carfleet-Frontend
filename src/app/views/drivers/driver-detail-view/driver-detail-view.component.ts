import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PathLink } from '../../../core/enums/path-link.enum';
import { DriverDto } from '../../../core/models/backend/data-transfer-object';
import { ApiService } from '../../../core/services/api/api.service';

/**
 * View of driver's details.
 */
@Component({
  selector: 'app-driver-detail-page',
  templateUrl: './driver-detail-view.component.html',
  styleUrls: ['./driver-detail-view.component.scss']
})
export class DriverDetailViewComponent implements OnInit {

  //region Fields
  private _driver!: DriverDto;
  //endregion

  //region Constructor
  /**
   * Instantiate a driver's view component.
   *
   * @param _apiService - The service that make HTTP request to the api
   * @param _route - Information about the route associated with the component.
   */
  constructor(private _apiService: ApiService, private _route: ActivatedRoute) { }
  //endregion

  //region Accessors.
  /**
   * Driver DTO.
   */
  get driver(): DriverDto {
    return this._driver;
  }
  //endregion

  //region Methods
  /**
   * Additional initialization tasks.
   */
  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    const driverObservable = this._apiService.getOneById(PathLink.Drivers, id) as Observable<DriverDto>;
    driverObservable.subscribe((value: DriverDto) => this._driver = value);
  }
  //endregion

}
