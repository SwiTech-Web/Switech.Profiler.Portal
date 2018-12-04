import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardSystemComponent } from './card-system/card-system.component';
import { IndexSystemComponent } from './index-system/index-system.component';
import { SidebarFeatureComponent } from './sidebar-feature/sidebar-feature.component';
import { NavbarFeatureComponent } from './navbar-feature/navbar-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSystemComponent,
    IndexSystemComponent,
    SidebarFeatureComponent,
    NavbarFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
