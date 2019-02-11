import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { ServicesComponent } from './services/services.component';
import { PorjectFormComponent } from './project/porject-form/porject-form.component';
import { JobDocumentationComponent } from './job-documentation/job-documentation.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderMenuComponent } from './layout/header-menu/header-menu.component';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    PorjectFormComponent,
    ServicesComponent,
    JobDocumentationComponent,
    HeaderComponent,
    HeaderMenuComponent,
    SidebarMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
