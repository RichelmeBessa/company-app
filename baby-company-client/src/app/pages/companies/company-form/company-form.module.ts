import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormPage } from './company-form.page';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CompanyFormPage
  }
]

@NgModule({
  declarations: [CompanyFormPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})

export class CompanyFormModule { }