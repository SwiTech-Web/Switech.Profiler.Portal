import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardSystemComponent } from './card-system/card-system.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'forms', component: CardSystemComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
