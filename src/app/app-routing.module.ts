import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichasComponent } from './pages/fichas/fichas.component';
import { RelogioComponent } from './pages/relogio/relogio.component';

const routes: Routes = [
  { path: 'fichas', component: FichasComponent },
  { path: 'relogio', component: RelogioComponent },
  { path: '',   redirectTo: 'fichas', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
