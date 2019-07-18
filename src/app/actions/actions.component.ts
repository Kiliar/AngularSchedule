import {Component} from '@angular/core';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.less'],
  providers: []
})
export class ActionsComponent {
  jsonString: {};
  newText: '';
  newDuration: 0;
  newStart: 0;

  constructor(private eventService: EventsService) {
    this.eventService.response$.subscribe(e => this.jsonString = JSON.stringify(e));
  }

  callParent() {
    this.eventService.addEvent({
      start: this.newStart,
      duration: this.newDuration,
      title: this.newText,
    });
  }
}
