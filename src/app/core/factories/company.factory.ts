import { CompanyDto } from '../models/backend/data-transfer-object';

export class CompanyFactory {
  createCompany(): CompanyDto {
    return  {
      id: 0,
      address: '',
      canton: '',
      city: '',
      color: '',
      companiescol: '',
      email: '',
      name: '',
      phone: '',
      websiteUrl: '',
      zip: ''
    };
  }
}
