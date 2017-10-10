import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrganisationService } from './organisation.service';
import { OrganisationRoutingModule } from './organisation.routing';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { OrganisationDetailComponent } from './organisation-details/organisation-details.component';
import { OrganisationAddComponent } from './organisation-add/organisation-add.component';
import { OrganisationEditComponent } from './organisation-edit/organisation-edit.component';


@NgModule ({

	imports: [
    CommonModule,
    FormsModule,
    OrganisationRoutingModule
    
  ],
  declarations: [
    OrganisationListComponent,
    OrganisationDetailComponent,
    OrganisationEditComponent,
    OrganisationAddComponent
  ],
  providers: [OrganisationService]

})

export class OrganisationModule {
}