import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizzaUtentiComponent } from './visualizza-utenti/visualizza-utenti.component';

const routes: Routes = [
  {
    path: '',
    component: VisualizzaUtentiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
