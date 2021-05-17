import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathLink } from '../../core/enums/path-link.enum';
import { CompanyDto } from '../../core/models/backend/data-transfer-object';
import { LiteralObject } from '../../core/models/literal-object';
import { RowSmartTable } from '../../core/models/table/row-smart.table';
import { ApiService } from '../../core/services/api/api.service';
import { CompanyViewModel } from './company-view.model';

/**
 * View of the companies list.
 */
@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-view.component.html',
  styleUrls: [ './companies-view.component.scss' ]
})
export class CompaniesViewComponent implements OnInit {

  //region Fields
  private readonly _settings: LiteralObject;
  private _companies: CompanyViewModel[] = [];
  //endregion

  //region Constructor
  /**
   * Initialize a companies view component.
   *
   * @param _apiService - The service that make HTTP request to the api
   * @param _router - The router service.
   */
  constructor(private _apiService: ApiService, private _router: Router) {
    this._settings = {
      actions: null,
      noDataMessage: 'Aucunes entreprises trouvées',
      mode: 'external',
      columns: {
        name: {
          title: 'Nom',
          type: 'string'
        },
        address: {
          title: 'Adresse',
          type: 'string'
        },
        cityWithZip: {
          title: 'Ville / Code postal',
          type: 'string'
        },
        phone: {
          title: 'Téléphone',
          type: 'string'
        },
        email: {
          title: 'Email',
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
   * Companies to use in the table.
   */
  get companies(): CompanyViewModel[] {
    return this._companies;
  }
  //endregion

  //region Methods
  //region Public methods
  /**
   * Additional initialization tasks.
   */
  ngOnInit(): void {
    const companiesObservable = this._apiService.getAll(PathLink.COMPANIES) as Observable<CompanyDto[]>;
    companiesObservable.pipe(map(this.mapCompanies()))
                       .subscribe((values: CompanyViewModel[]) => this._companies = values);
  }

  /**
   * Event when a row is selected.
   *
   * @param row - The row of the table
   */
  async onRowSelected(row: RowSmartTable): Promise<void> {
    await this._router.navigate([ `${PathLink.COMPANIES}/${row.data.id}` ]);
  }
  //endregion

  //region Private methods
  private mapCompanies(): (values: CompanyDto[]) => CompanyViewModel[] {
    return (values: CompanyDto[]) => values.map((value: CompanyDto) => {
      const companyPageModel: CompanyViewModel = {
        id: value.id,
        name: value.name,
        address: value.address,
        cityWithZip: `${value.city} / ${value.zip}`,
        phone: value.phone,
        email: value.email
      };
      return companyPageModel;
    });
  }
  //endregion
  //endregion
}
