import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Thank You Matcher';
  mods = [
    {
      icon: 'school',
      name: 'Ambassadors',
      links: [
        {url: '/ambassadors/list', text: 'View List'},
        {url: '/ambassadors/import', text: 'Import'},
      ]
    },
    {
      icon: 'groups',
      name: 'Staff',
      links: [
        {url: '/staff/list', text: 'View List'},
        {url: '/staff/import', text: 'Import'},
      ]
    },
    {
      icon: 'attach_money',
      name: 'Donors',
      links: [
        {url: '/donors/list', text: 'View List'},
        {url: '/donors/import', text: 'Import'},
      ]
    },
    {
      icon: 'join_inner',
      name: 'Matches',
      links: [
        {url: '/match/list', text: 'View List'},
      ]
    },
  ];
}
