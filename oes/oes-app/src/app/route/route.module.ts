import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ExamsComponent } from '../exams/exams.component';
import {AdminHomeComponent} from '../admin-home/admin-home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CreateExamComponent} from '../admin-exams/create-exam/create-exam.component';
import {ViewExamComponent} from '../admin-exams/view-exam/view-exam.component';
import {CreateCategoryComponent} from '../category/create-category/create-category.component';
import {ViewCategoryComponent} from '../category/view-category/view-category.component';
import { CreateUserComponent } from '../user/create-user/create-user.component';
import { ViewUserComponent } from '../user/view-user/view-user.component';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
import { AdminSettingsComponent } from '../admin-settings/admin-settings.component';

// Route Configuration
 const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
 },
  { path: 'home', component: HomeComponent },
  { path: 'exams', component: ExamsComponent },
  {path: 'admin', component: AdminHomeComponent,
  children: [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'addExam', component: CreateExamComponent},
    { path: 'viewExam', component: ViewExamComponent},
    { path: 'addCategory', component: CreateCategoryComponent},
    { path: 'viewCategory', component: ViewCategoryComponent},
    { path: 'addUser', component: CreateUserComponent},
    { path: 'viewUsers', component: ViewUserComponent},
    { path: 'editProfile', component: AdminProfileComponent},
    { path: 'settings', component: AdminSettingsComponent}
       ]}
];

@NgModule({
  imports: [
          RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [          RouterModule
  ]
})
export class RouteModule { }
