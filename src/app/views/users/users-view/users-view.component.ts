import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathLink } from '../../../core/enums/path-link.enum';
import { UserRole } from '../../../core/enums/user-role.enum';
import { UserStatus } from '../../../core/enums/user-status.enum';
import { UserDto } from '../../../core/models/backend/data-transfer-object';
import { LiteralObject } from '../../../core/models/literal-object';
import { RowSmartTable } from '../../../core/models/table/row-smart.table';
import { ApiService } from '../../../core/services/api/api.service';
import { UserViewModel } from './user-view.model';

/**
 * View of the users list.
 */
@Component({
  selector: 'app-users-page',
  templateUrl: './users-view.component.html',
  styleUrls: [ './users-view.component.scss' ]
})
export class UsersViewComponent implements OnInit {

  //region Fields
  private readonly _settings: LiteralObject;
  private _users: UserViewModel[] = [];
  //endregion

  //region Constructor
  /**
   * Instantiate a companies view component.
   *
   * @param _apiService - The service that make HTTP request to the api
   * @param _router - The router service.
   */
  constructor(private _apiService: ApiService, private _router: Router) {
    this._settings = {
      noDataMessage: 'Aucun utilisateurs trouvés',
      mode: 'external',
      actions: {
        position: 'right',
        add: false,
        delete: false
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
      },
      columns: {
        firstname: {
          title: 'Prénom',
          type: 'string'
        },
        lastname: {
          title: 'Nom',
          type: 'string'
        },
        email: {
          title: 'Email',
          type: 'string'
        },
        company: {
          title: 'Entreprise',
          type: 'string'
        },
        role: {
          title: 'Rôle',
          type: 'string'
        },
        status: {
          title: 'Statut',
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
   * Users to use in the table.
   */
  get users(): UserViewModel[] {
    return this._users;
  }
  //endregion

  //region Methods
  //region Public methods
  /**
   * Additional initialization tasks.
   */
  ngOnInit(): void {
    const usersObservable = this._apiService.getAll(PathLink.Users) as Observable<UserDto[]>;
    usersObservable.pipe(map(this.mapUsers()))
                   .subscribe((value: UserViewModel[]) => this._users = value);
  }

  /**
   * Event when a row is selected.
   *
   * @param row - The row of the table
   */
  async onRowSelected(row: RowSmartTable): Promise<void> {
    await this._router.navigate([ `${PathLink.Users}/${row.data.id}` ]);
  }

  /**
   * Event when the add button is clicked.
   */
  async onAddClick(): Promise<void> {
    await this._router.navigate([ `${PathLink.Users}/create` ]);
  }
  //endregion

  //region Private methods
  private mapUsers(): (values: UserDto[]) => UserViewModel[] {
    return (values: UserDto[]) =>
      values.map((value: UserDto) => {
        const userViewModel: UserViewModel = {
          id: value.id,
          firstname: value.firstname as string,
          lastname: value.lastname as string,
          email: value.email as string,
          company: value.company?.name as string,
          role: value.role as UserRole,
          status: value.status as UserStatus
        };
        return userViewModel;
      });
  }
  //endregion
  //endregion
}
