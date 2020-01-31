import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompaniesService } from './companies.service';
import { Company } from './companies.model';
import { Subject } from 'rxjs';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss']
})
export class CompaniesPage implements OnInit, OnDestroy {

  edit = faEdit;
  trash = faTrash;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  companies: Company[];

  constructor(private companyService: CompaniesService) { }

  ngOnInit() {
    this.dtOptions = environment.dtOptions;
    this.companyService.fetchedCompanies().subscribe(companies => {
      this.companies = companies;
      this.dtTrigger.next();
    });
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe(response => {
      this.companies = this.companies.filter(company => company.id !== response.id);
    });
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

}
