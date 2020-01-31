import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/companies',
    pathMatch: 'full'
  },

  {
    path: 'admin/companies',
    loadChildren: './pages/companies/companies.module#CompaniesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
