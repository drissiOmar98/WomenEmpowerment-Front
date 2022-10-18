import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListFomateurComponent} from "./CoursesSpace/list-fomateur/list-fomateur.component";
import {FormationComponent} from "./CoursesSpace/formation/formation.component";
import {ListeFormationComponent} from "./CoursesSpace/liste-formation/liste-formation.component";
import {QuizComponent} from "./CoursesSpace/quiz/quiz.component";
import {HomeComponent} from "./Back-End/home/home.component";
import {AddFomateurComponent} from "./CoursesSpace/add-fomateur/add-fomateur.component";
import {WelcomeComponent} from "./CoursesSpace/welcome/welcome.component";

import {
  AddPartnerInstitutionComponent
} from "./ExchangeStudents/add-partner-institution/add-partner-institution.component";
import {ListOfPartnersComponent} from "./ExchangeStudents/list-of-partners/list-of-partners.component";
import {StatUniversityComponent} from "./ExchangeStudents/stat-university/stat-university.component";
import {LoginComponent} from "./Back-End/login/login.component";
import {AppointmentListComponent} from "./appointment-list/appointment-list.component";
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";
import {ComplaintListComponent} from "./complaint-list/complaint-list.component";
import {AddComplaintComponent} from "./add-complaint/add-complaint.component";
import {HomeFComponent} from "./FontEnd/home-f/home-f.component";
import {LayoutFComponent} from "./FontEnd/layout-f/layout-f.component";
import {BlogFormationComponent} from "./CoursesSpace/blog-formation/blog-formation.component";
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


const routes: Routes =

   [

     {path:'',component: HomeComponent },
     {path:'login',component: LoginComponent },
     { path: 'sss',  redirectTo: '/front/frontEnd/homeF', pathMatch: 'full' },

     {
       path: 'front',
       component: LayoutFComponent,
       children: [
         {
           path: 'frontEnd',
           children: [

             { path: 'blogF', component: BlogFormationComponent },
             { path: 'homeF', component: HomeFComponent },
             { path: 'ListUniversitiesFront',component: ListOfUniveritiesfrontComponent},
             { path: 'PartnerDetailFront/:id',component:DetailFrontComponent},
             { path :  'covid', component: CovidComponent,
               children: [
                 { path: 'map', component: CovidMapComponent,
                   children: [{ path: 'detail/:country', component: DetailComponent }]
                 },
                 { path: 'map/active', component: ActiveComponent,
                   children: [{ path: 'detail/:country', component: DetailComponent }]
                 },
                 { path: 'map/confirmed', component: ConfirmedComponent,
                   children: [{ path: 'detail/:country', component: DetailComponent }]
                 },
                 { path: 'map/recovered', component: RecoveredComponent,
                   children: [{ path: 'detail/:country', component: DetailComponent }]
                 },
                 { path: 'map/deceased', component: DeceasedComponent,
                   children: [{ path: 'detail/:country', component: DetailComponent }]
                 }
               ]
             },
           ]
         },
       ]
     },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'Formation-management',
        children: [

          { path: 'addFormateur', component: AddFomateurComponent },
          { path: 'formateur', component: ListFomateurComponent },
          { path: 'addFormation', component: FormationComponent },
          { path: 'listFormateur', component: ListFomateurComponent } ,
          { path: 'listFormation', component: ListeFormationComponent },
          { path: 'quiz', component: QuizComponent },
          { path: 'quizWelcome', component: WelcomeComponent },

        ]
      },
      {
        path:'Exchange-Student-Management',
        children: [
          { path: 'addUniversity', component: AddPartnerInstitutionComponent },
          { path: 'ListUniversities', component: ListOfPartnersComponent },
          { path :  'statUniversities', component: StatUniversityComponent},
          {path: 'ListUniversitiesDemands/:id', component: ListOfDemandsforUniversityComponent}

        ]

      },
      {
        path: 'helpSpace-Management',
        children: [

          { path: 'addAppointment', component: AddAppointmentComponent },
          { path: 'LisAppointment', component: AppointmentListComponent },
          { path: 'addComplaint', component: AddComplaintComponent },
          { path: 'ListComplaint', component: ComplaintListComponent } ,

        ]

      }


  ]
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
