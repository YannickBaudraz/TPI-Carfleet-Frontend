import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CoreModule } from '../assets/ngx-admin/@core/core.module';
import { NotFoundComponent } from '../assets/ngx-admin/@theme/components/not-found/not-found.component';
import { ThemeModule } from '../assets/ngx-admin/@theme/theme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { CompaniesViewComponent } from './views/companies/companies-view/companies-view.component';
import { CompanyDetailViewComponent } from './views/companies/company-detail-view/company-detail-view.component';
import { DriverDetailViewComponent } from './views/drivers/driver-detail-view/driver-detail-view.component';
import { DriversViewComponent } from './views/drivers/drivers-view/drivers-view.component';
import { UserDetailComponent } from './views/users/user-detail/user-detail.component';
import { UsersViewComponent } from './views/users/users-view/users-view.component';
import { VehicleDetailViewComponent } from './views/vehicles/vehicle-detail-view/vehicle-detail-view.component';
import { VehiclesViewComponent } from './views/vehicles/vehicles-view/vehicles-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    VehiclesViewComponent,
    VehicleDetailViewComponent,
    NotFoundComponent,
    DriversViewComponent,
    DriverDetailViewComponent,
    GenderPipe,
    CompaniesViewComponent,
    CompanyDetailViewComponent,
    UsersViewComponent,
    UserDetailComponent,
    EnumToArrayPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // Ngx-Admin
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbLayoutModule,
    NbInputModule,
    NbSelectModule,
    NbIconModule,
    ReactiveFormsModule,
    NbAlertModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
