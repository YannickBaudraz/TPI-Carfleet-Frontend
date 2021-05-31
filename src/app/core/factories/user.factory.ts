/**
 * Factory that create users.
 */
import { UserDto } from '../models/backend/data-transfer-object';
import { CompanyFactory } from './company.factory';

export class UserFactory {
  createUser(): UserDto {
    return {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      role: null,
      language: '',
      status: null,
      company: new CompanyFactory().createCompany()
    };
  }
}
