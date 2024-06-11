import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizzaUtentiComponent } from './visualizza-utenti/visualizza-utenti.component';
import { FormInserimentoUtenteComponent } from './form-inserimento-utente/form-inserimento-utente.component';
import { DettagliUserComponent } from './dettagli-user/dettagli-user.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './visualizza-utenti/navbar/navbar.component';

@NgModule({
  declarations: [
    VisualizzaUtentiComponent,
    FormInserimentoUtenteComponent,
    DettagliUserComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
