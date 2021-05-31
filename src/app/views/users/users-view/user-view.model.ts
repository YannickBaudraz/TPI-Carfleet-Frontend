import { UserRole } from '../../../core/enums/user-role.enum';
import { UserStatus } from '../../../core/enums/user-status.enum';

/**
 * Model used in the users view.
 */
export interface UserViewModel {
  /**
   * Unique ID row number.
   */
  id: number;

  /**
   * Firstname.
   */
  firstname: string;

  /**
   * Lastname.
   */
  lastname: string;

  /**
   * Email address.
   */
  email: string;

  /**
   * Company name.
   */
  company: string;

  /**
   * User role.
   */
  role: UserRole;

  /**
   * User status.
   */
  status: UserStatus;
}
