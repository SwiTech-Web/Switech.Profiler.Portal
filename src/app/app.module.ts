import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TranslateService } from './translate/translate.service';
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
import { TranslatePipe } from './translate/translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
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
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
