import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrganisationService } from '../organisation.service';
import { Organisation } from '../organisation';


@Component({
  selector: 'app-organisation-edit',
  templateUrl: './organisation-edit.component.html'
  
})
export class OrganisationEditComponent implements OnInit {
  	public organisation;
  	errorMessage: string;
  	constructor(private orgService: OrganisationService, private route: ActivatedRoute, private router: Router) {
  		this.organisation = <Organisation>{};
  	}

  	ngOnInit() {
  		const orgId = this.route.snapshot.params['orgId'];
  		this.orgService.getOrganisationById(orgId).subscribe(
  			organisation => this.organisation = organisation,
      		error => this.errorMessage = <any> error);
  			
  	}

  	 onSubmit(organisation) {
  		const org_id = this.organisation.orgId;
  //console.log("on subm"+organisation.pincode + "user_id"+user_id);
   		var that = this;
    	this.orgService.updateOrganisation(org_id, organisation).subscribe(
      		get_result,
      		get_error
    	);

    function get_error(error) {
      console.log(error);
      console.log('error catched');
      return this.errorMessage = <any> error;
    }

    function get_result(update_status) {
      console.log(update_status);
      if (update_status.status === 204) {
        console.log('update success');
       // that.gotoUserDetail(user);
      } else {
        return console.log('update failed');
      }
    }
  };

  gotoOrganisationDetail(organisation: Organisation) {
    this.router.navigate(['/organisations', organisation.orgId]);
  }


}
