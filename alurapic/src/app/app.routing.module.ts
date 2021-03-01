import { SingnInComponent } from './home/signin/signin.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// tslint:disable-next-line: one-variable-per-declaration
const routes: Routes = [
  {path: '', component: SingnInComponent},
  {path: 'user/:userName', component: PhotoListComponent,resolve:{photos:PhotoListResolver}},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule{

}
