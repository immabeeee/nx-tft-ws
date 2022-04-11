import { Component, OnInit } from '@angular/core';
import { Widget } from '@nx-ftf-workspace/api-interfaces';

@Component({
  selector: 'nx-ftf-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  widgets: Widget[] = [
    { id: '1', title: 'Widget 01', description: 'Pending' },
    { id: '2', title: 'Widget 02', description: 'Pending' },
    { id: '3', title: 'Widget 03', description: 'Pending' },
  ];
}