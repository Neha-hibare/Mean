import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'organisations', title: 'Organisation',  icon:'location_city', class: '' },
    { path: 'users', title: 'User',  icon:'person', class: '' },
    { path: 'agent', title: 'Agent',  icon:'group_add', class: '' },
    { path: 'company', title: 'Company',  icon:'business', class: '' },
    { path: 'orgbranch', title: 'Org_Branch',  icon:'device_hub', class: '' },
    { path: 'transaction', title: 'Transaction',  icon:'monetization_on', class: '' },
    { path: 'vehicle', title: 'Vehicle',  icon:'directions_bus', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
