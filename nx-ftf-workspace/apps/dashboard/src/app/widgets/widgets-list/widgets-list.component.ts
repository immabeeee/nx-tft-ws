import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from '@nx-ftf-workspace/api-interfaces';

@Component({
  selector: 'nx-ftf-workspace-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})

export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
