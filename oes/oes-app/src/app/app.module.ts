import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ExamsComponent } from './exams/exams.component';
import {RouteModule} from './route/route.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { CreateExamComponent } from './admin-exams/create-exam/create-exam.component';
import { ViewExamComponent } from './admin-exams/view-exam/view-exam.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import {
  InputTextModule,
  InputTextareaModule} from 'primeng/primeng';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    ExamsComponent,
    AdminHomeComponent,
    DashboardComponent,
    SettingsComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    CreateExamComponent,
    ViewExamComponent,
    CreateCategoryComponent,
    ViewCategoryComponent,
    CreateUserComponent,
    ViewUserComponent,
    AdminProfileComponent,
    AdminSettingsComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule,
    InputTextModule, InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
