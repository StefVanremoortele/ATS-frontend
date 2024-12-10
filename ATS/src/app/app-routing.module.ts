import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVOverviewComponent } from './cv/cv-overview/cv-overview.component';

const routes: Routes = [
  {
    path: 'cv-list', component: CVOverviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
