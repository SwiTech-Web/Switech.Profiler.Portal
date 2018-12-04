import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardSystemComponent } from './card-system/card-system.component';
import { IndexSystemComponent } from './index-system/index-system.component';

const routes: Routes = [
    { path: 'forms', component: CardSystemComponent },
    { path: 'home', component: IndexSystemComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
