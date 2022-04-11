import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from '@nx-ftf-workspace/api-interfaces';

@Component({
  selector: 'nx-ftf-workspace-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.scss']
})
export class WidgetDetailsComponent {
  currentWidget: Widget;
  originalTitle = '';
  @Input() set widget(value: Widget) {
    if(value) this.originalTitle = value.title;
    this.currentWidget = {...value};
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}