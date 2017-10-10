import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../organisation.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Organisation } from '../organisation';

@Component({
  selector: 'app-organisation-detail',
  templateUrl: './organisation-details.component.html'
  
})
export class OrganisationDetailComponent implements OnInit {

 errorMessage: string;
  organisation: Organisation;
  constructor(private route: ActivatedRoute, private router: Router, private organisationService: OrganisationService) {
    this.organisation = <Organisation>{};
  }

  ngOnInit() {
   const orgId = this.route.snapshot.params['id'];
    this.organisationService.getOrganisationById(orgId).subscribe(
      organisation => this.organisation = organisation,
      error => this.errorMessage = <any> error);
  }

  gotoOrganisationsList() {
    this.router.navigate(['/organisations']);
  }

  editOrganisation() {
    this.router.navigate(['/organisations', this.organisation.orgId, 'edit']);
  }

}
