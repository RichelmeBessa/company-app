import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesPage } from './companies.page';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPage
  },
  {
    path: 'new',
    loadChildren: './company-form/company-form.module#CompanyFormModule'
  },
  {
    path: ':id',
    loadChildren: './company-form/company-form.module#CompanyFormModule'
  }
];

@NgModule({
  declarations: [CompaniesPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    FontAwesomeModule
  ]
})
export class CompaniesModule { }
