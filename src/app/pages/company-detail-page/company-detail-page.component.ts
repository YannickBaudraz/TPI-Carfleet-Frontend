import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PathLink } from '../../core/enums/path-link.enum';
import { Company } from '../../core/models/backend/dto';
import { ApiService } from '../../core/services/api/api.service';

@Component({
  selector: 'app-company-detail-page',
  templateUrl: './company-detail-page.component.html',
  styleUrls: [ './company-detail-page.component.scss' ]
})
export class CompanyDetailPageComponent implements OnInit {

  private _company!: Company;

  constructor(private _apiService: ApiService, private _route: ActivatedRoute) { }

  get company(): Company {
    return this._company;
  }

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    const companyObservable = this._apiService.getOneById(PathLink.COMPANIES, id) as Observable<Company>;
    companyObservable.subscribe((value: Company) => this._company = value);
  }

}
