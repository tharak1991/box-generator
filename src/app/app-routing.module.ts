import { BoxPageComponent } from './components/box-page/box-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Parent Routes
const routes: Routes = [
  {
    path: '',
    component: BoxPageComponent,
  },
  {
    path: 'box',
    component: BoxPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
