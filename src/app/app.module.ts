import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GoogleChartsModule} from "angular-google-charts";

import {NgbCollapseModule, NgbModalModule, NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from "ngx-pagination";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {ListFomateurComponent} from "./CoursesSpace/list-fomateur/list-fomateur.component";
import {FormationComponent} from "./CoursesSpace/formation/formation.component";
import {AddFomateurComponent} from "./CoursesSpace/add-fomateur/add-fomateur.component";
import { ListeFormationComponent } from './CoursesSpace/liste-formation/liste-formation.component';
import {DayPilotModule} from "daypilot-pro-angular";

import {environment} from "../environments/environment";

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {TreeViewModule} from "@syncfusion/ej2-angular-navigations";
import { QuizComponent } from './CoursesSpace/quiz/quiz.component';
import { ChangeBgDirective } from './change-bg.directive';
import {NgxQRCodeModule} from "ngx-qrcode2";
import { HomeComponent } from './Back-End/home/home.component';
import { FooterComponent } from './Back-End/footer/footer.component';
import { NavbarComponent } from './Back-End/navbar/navbar.component';
import { LayoutComponent } from './Back-End/layout/layout.component';
import { SidbarComponent } from './Back-End/sidbar/sidbar.component';
import {WelcomeComponent} from "./CoursesSpace/welcome/welcome.component";
import {ListOfPartnersComponent} from "./ExchangeStudents/list-of-partners/list-of-partners.component";
import {
  AddPartnerInstitutionComponent
} from "./ExchangeStudents/add-partner-institution/add-partner-institution.component";
import {RouterModule, Routes} from "@angular/router";
import {PartnerInstitutionService} from "./ExchangeStudents/services/partner-institution.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {StatUniversityComponent} from "./ExchangeStudents/stat-university/stat-university.component";
import {ChartsModule} from "ng2-charts";

import {LoginComponent} from "./Back-End/login/login.component";
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { UpdateComplaintComponent } from './update-complaint/update-complaint.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import {HomeFComponent} from "./FontEnd/home-f/home-f.component";
import {FooterFComponent} from "./FontEnd/footer-f/footer-f.component";
import {LayoutFComponent} from "./FontEnd/layout-f/layout-f.component";
import {NavbarFComponent} from "./FontEnd/navbar-f/navbar-f.component";
import {BlogFormationComponent} from "./CoursesSpace/blog-formation/blog-formation.component";
import {CommonModule} from "@angular/common";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {NgxWebstorageModule} from "ngx-webstorage";
import {Angulartics2Module} from "angulartics2";
import {
  ListOfDemandsforUniversityComponent
} from "./ExchangeStudents/list-of-demandsfor-university/list-of-demandsfor-university.component";
import {
  ListOfUniveritiesfrontComponent
} from "./ExchangeStudents/list-of-univeritiesfront/list-of-univeritiesfront.component";
import {DetailFrontComponent} from "./ExchangeStudents/detail-front/detail-front.component";
import {CovidComponent} from "./ExchangeStudents/covid19API/corona-virus/covid-map/coviddd/covid.component";
import {CovidMapComponent} from "./ExchangeStudents/covid19API/corona-virus/covid-map/covid-map.component";
import {DetailComponent} from "./ExchangeStudents/covid19API/corona-virus/detail/detail.component";
import {ActiveComponent} from "./ExchangeStudents/covid19API/corona-virus/covid-map/active/active.component";
import {ConfirmedComponent} from "./ExchangeStudents/covid19API/corona-virus/covid-map/confirmed/confirmed.component";
import {RecoveredComponent} from "./ExchangeStudents/covid19API/corona-virus/covid-map/recovered/recovered.component";
import {DeceasedComponent} from "./ExchangeStudents/covid19API/corona-virus/covid-map/deceased/deceased.component";
import {
  CovidToggleComponent
} from "./ExchangeStudents/covid19API/corona-virus/covid-menu/covid-toggle/covid-toggle.component";
import {CovidMenuComponent} from "./ExchangeStudents/covid19API/corona-virus/covid-menu/covid-menu.component";




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);



@NgModule({
  declarations: [
    AppComponent,
    ListFomateurComponent,
    AddFomateurComponent,
    FormationComponent,
    ListeFormationComponent,
    QuizComponent,
    HomeFComponent,
    ChangeBgDirective,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    LayoutComponent,
    SidbarComponent,
    WelcomeComponent,
    ListOfPartnersComponent,
    AddPartnerInstitutionComponent,
    StatUniversityComponent,
    ComplaintListComponent,
    AddComplaintComponent,
    UpdateComplaintComponent,
    AppointmentListComponent,
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    FooterFComponent,
    LayoutFComponent,
    NavbarFComponent,
    BlogFormationComponent,
    ListOfDemandsforUniversityComponent,
    ListOfUniveritiesfrontComponent,
    DetailFrontComponent,
    CovidComponent,
    CovidMapComponent,
    DetailComponent,
    ActiveComponent,
    ConfirmedComponent,
    RecoveredComponent,
    DeceasedComponent,
    CovidToggleComponent,
    CovidMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxQRCodeModule,
    GoogleChartsModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    TreeViewModule,
    NgbModule,
    NgbCollapseModule,
    NgbTooltipModule,
    ClipboardModule,
    NgxWebstorageModule.forRoot(),
    DayPilotModule,
    ToastrModule.forRoot(),
    Angulartics2Module.forRoot({
      developerMode: !environment.production,
    }),
    ChartsModule,
    CommonModule,
    NgbModalModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
