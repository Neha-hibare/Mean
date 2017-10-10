import { Component, OnInit } from '@angular/core';
import { Organisation } from '../organisation';
import { OrganisationService } from '../organisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html'
  
})
export class OrganisationListComponent implements OnInit {

    errorMessage: string;
  	organisations: Organisation[];

  	constructor(private router: Router, private organisationService: OrganisationService) {
  	}

  	ngOnInit() {
    	this.organisationService.getOrganisations().subscribe(
     		organisations => this.organisations = organisations,
      		error => this.errorMessage = <any> error);
  	}

  	onSelect(organisation: Organisation) {
    	this.router.navigate(['/organisations', organisation.orgId]);
  	}

  	addOrganisation() {
    	this.router.navigate(['/organisations/add']);
  	}

}
