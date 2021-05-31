import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbGlobalLogicalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { UserStatus } from 'src/app/core/enums/user-status.enum';
import { PathLink } from '../../../core/enums/path-link.enum';
import { UserRole } from '../../../core/enums/user-role.enum';
import { ViewMode } from '../../../core/enums/view-mode.enum';
import { UserFactory } from '../../../core/factories/user.factory';
import { CompanyDto, UserDto } from '../../../core/models/backend/data-transfer-object';
import { ApiService } from '../../../core/services/api/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.scss' ]
})
export class UserDetailComponent implements OnInit {
  //region Fields
  ViewMode = ViewMode;
  UserRole = UserRole;
  UserStatus = UserStatus;

  private _mode: ViewMode;
  private _user: UserDto;
  private readonly _companies: Observable<CompanyDto[]>;
  private readonly _toastrConfig: Partial<NbToastrConfig>;
  //endregion

  //region Constructor
  /**
   * Instantiate
   * @param _apiService - The service that make HTTP request to the api.
   * @param _route - Information about the route associated with the component.
   * @param _toastrService - The service that show a toastr when update fail.
   */
  constructor(private _apiService: ApiService,
              private _route: ActivatedRoute,
              private _toastrService: NbToastrService
  ) {
    this._mode = ViewMode.Create;
    this._user = new UserFactory().createUser();
    this._companies = this._apiService.getAll(PathLink.Companies) as Observable<CompanyDto[]>;
    this._toastrConfig = {
      position: NbGlobalLogicalPosition.BOTTOM_END,
      preventDuplicates: true
    };
    console.log(this._user);
  }
  //endregion

  //region Accessors
  /**
   * View mode.
   */
  get mode(): ViewMode {
    return this._mode;
  }

  /**
   * User DTO.
   */
  get user(): UserDto {
    return this._user as UserDto;
  }

  /**
   * Companies name.
   */
  get companies(): Observable<CompanyDto[]> {
    return this._companies;
  }
//endregion

  //region Methods
  ngOnInit(): void {
    this._route.data.subscribe(data => {
      if (data.mode == null) {
        return;
      }

      if (data.mode as ViewMode === ViewMode.Edit) {
        this._mode = ViewMode.Edit;
        const id = Number(this._route.snapshot.paramMap.get('id'));
        const userObservable = this._apiService.getOneById(PathLink.Users, id) as Observable<UserDto>;
        userObservable.subscribe((value: UserDto) => this._user = value);
      }
    });
  }

  /**
   * Handle form submission.
   */
  onSubmit(): void {
    this._companies.subscribe((companies: CompanyDto[]) => {
      return this._user.company = (companies.find((company: CompanyDto) => {
        return company.name === this._user.company.name;
      }) as CompanyDto);
    });

    const userObservable = this._mode === ViewMode.Create
                           ? this._apiService.saveOne(PathLink.Users, this._user) as Observable<UserDto>
                           : this._apiService.updateOne(PathLink.Users, this._user) as Observable<UserDto>;

    userObservable.subscribe((value: UserDto) => {
        if (!value) {
          this._toastrService.danger('L\'opération n\'a pas pu être effectuée.', 'Erreur', this._toastrConfig);
        }
      },
      () => this._toastrService.danger('L\'opération n\'a pas pu être effectuée.', 'Erreur', this._toastrConfig)
    );
  }
  //endregion
}
