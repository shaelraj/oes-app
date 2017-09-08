import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ExamsComponent } from './exams/exams.component';
import {RouteModule} from './route/route.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { CreateExamComponent } from './admin-exams/create-exam/create-exam.component';
import { ViewExamComponent } from './admin-exams/view-exam/view-exam.component';

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
    CategoryComponent,
    SettingsComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    CreateExamComponent,
    ViewExamComponent
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
