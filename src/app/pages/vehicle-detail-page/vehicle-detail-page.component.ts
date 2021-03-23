import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../core/models/backend/dto';
import { ApiService } from '../../core/services/api/api.service';

@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: [ './vehicle-detail-page.component.scss' ]
})
export class VehicleDetailPageComponent implements OnInit {

  private _vehicle!: Vehicle;

  constructor(private _apiService: ApiService, private _route: ActivatedRoute) { }

  get vehicle(): Vehicle {
    return this._vehicle;
  }

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._apiService.getOneVehicle(id).subscribe((value: Vehicle) => this._vehicle = value);
  }

}
