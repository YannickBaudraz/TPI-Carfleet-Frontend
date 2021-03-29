import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PathLink } from '../../core/enums/path-link.enum';
import { Driver } from '../../core/models/backend/dto';
import { ApiService } from '../../core/services/api/api.service';

@Component({
  selector: 'app-driver-detail-page',
  templateUrl: './driver-detail-page.component.html',
  styleUrls: ['./driver-detail-page.component.scss']
})
export class DriverDetailPageComponent implements OnInit {

  private _driver!: Driver;

  constructor(private _apiService: ApiService, private _route: ActivatedRoute) { }

  get driver(): Driver {
    return this._driver;
  }

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    const driverObservable = this._apiService.getOneById(PathLink.DRIVERS, id) as Observable<Driver>;
    driverObservable.subscribe((value: Driver) => this._driver = value);
  }

}
