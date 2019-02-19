import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';
import { JobDocumentationComponent } from './job-documentation/job-documentation.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { ConnectionComponent } from './connection/connection.component';
import { PorjectFormComponent } from './project/porject-form/porject-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'project-form', component: PorjectFormComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'job-documentation', component: JobDocumentationComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
