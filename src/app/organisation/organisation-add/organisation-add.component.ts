import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganisationService } from '../organisation.service';
import { Organisation } from '../organisation';

@Component({
  selector: 'app-organisation-add',
  templateUrl: './organisation-add.component.html'
  
})
export class OrganisationAddComponent implements OnInit {
	organisation: Organisation;
	errorMessage: string;
  constructor(private orgService: OrganisationService, private router: Router) {
    this.organisation = <Organisation>{}; 
  }

  ngOnInit() {
  }

  onsubmit(organisation: Organisation){
  	organisation.orgId = null;
  	this.orgService.addOrganisation(organisation).subscribe(
  		new_organisation => 
  		{
    		this.organisation = new_organisation;
        	this.gotoOrganisationsList();
        },
      error => this.errorMessage = <any>error
    );
  }

  gotoOrganisationsList() {
    this.router.navigate(['/users']);
  }

}
