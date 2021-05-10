import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathLink } from '../../core/enums/path-link.enum';
import { Company } from '../../core/models/backend/dto';
import { LiteralObject } from '../../core/models/literal-object';
import { RowSmartTable } from '../../core/models/table/row-smart.table';
import { ApiService } from '../../core/services/api/api.service';
import { CompanyPageModel } from './company-page.model';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: [ './companies-page.component.scss' ]
})
export class CompaniesPageComponent implements OnInit {

  private readonly _settings: LiteralObject;
  private _companies: CompanyPageModel[] = [];

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

  get settings(): LiteralObject {
    return this._settings;
  }

  get companies(): CompanyPageModel[] {
    return this._companies;
  }

  ngOnInit(): void {
    const companiesObservable = this._apiService.getAll(PathLink.COMPANIES) as Observable<Company[]>;
    companiesObservable.pipe(map(this.mapCompanies()))
                       .subscribe((values: CompanyPageModel[]) => this._companies = values);
  }

  async onRowSelected(row: RowSmartTable): Promise<void> {
    await this._router.navigate([ `${PathLink.COMPANIES}/${row.data.id}` ]);
  }

  private mapCompanies(): (values: Company[]) => CompanyPageModel[] {
    return (values: Company[]) => values.map((value: Company) => {
      const companyPageModel: CompanyPageModel = {
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
}
