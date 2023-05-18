import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScarpeComponent } from './scarpe/scarpe.component';
import { MaglietteComponent } from './magliette/magliette.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'scarpe', component: ScarpeComponent},
  { path: 'magliette', component: MaglietteComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
