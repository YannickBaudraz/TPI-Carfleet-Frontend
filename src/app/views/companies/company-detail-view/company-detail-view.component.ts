import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PathLink } from '../../../core/enums/path-link.enum';
import { CompanyDto } from '../../../core/models/backend/data-transfer-object';
import { ApiService } from '../../../core/services/api/api.service';

/**
 * View of company's details.
 */
@Component({
  selector: 'app-company-detail-page',
  templateUrl: './company-detail-view.component.html',
  styleUrls: [ './company-detail-view.component.scss' ]
})
export class CompanyDetailViewComponent implements OnInit {

  //region Fields
  private _company!: CompanyDto;
  //endregion

  //region Constructor
  /**
   * Instantiate a company's view component.
   *
   * @param _apiService - The service that make HTTP request to the api
   * @param _route - Information about the route associated with the component.
   */
  constructor(private _apiService: ApiService, private _route: ActivatedRoute) { }
  //endregion

  //region Accessors
  /**
   * Company DTO.
   */
  get company(): CompanyDto {
    return this._company;
  }
  //endregion

  //region Methods
  /**
   * Additional initialization tasks
   */
  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    const companyObservable = this._apiService.getOneById(PathLink.Companies, id) as Observable<CompanyDto>;
    companyObservable.subscribe((value: CompanyDto) => this._company = value);
  }
  //endregion

}
