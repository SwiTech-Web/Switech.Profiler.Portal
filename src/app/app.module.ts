import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardSystemComponent } from './card-system/card-system.component';
import { SidebarFeatureComponent } from './layout/sidebar-feature/sidebar-feature.component';
import { NavbarFeatureComponent } from './layout/navbar-feature/navbar-feature.component';
import { NavbarMenuComponent } from './layout/navbar-menu/navbar-menu.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { ServicesComponent } from './services/services.component';
import { PorjectFormComponent } from './project/porject-form/porject-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSystemComponent,
    SidebarFeatureComponent,
    NavbarFeatureComponent,
    NavbarMenuComponent,
    HomeComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    ServicesComponent,
    PorjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
