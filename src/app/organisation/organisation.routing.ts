import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { OrganisationDetailComponent } from './organisation-details/organisation-details.component';
import { OrganisationAddComponent } from './organisation-add/organisation-add.component';
import { OrganisationEditComponent } from './organisation-edit/organisation-edit.component';

const organisationRoutes: Routes = [
  {path: 'organisations', component: OrganisationListComponent},
  {path: 'organisations/add', component: OrganisationAddComponent},
  {path: 'organisations/:id', component: OrganisationDetailComponent},
  {path: 'organisations/:id/edit', component: OrganisationEditComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(organisationRoutes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule{}