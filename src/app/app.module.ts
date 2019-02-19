import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnectionComponent } from './connection/connection.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

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
    FooterComponent,
    ConnectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
