import {Component} from '@angular/core';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.less'],
  providers: [EventsService]

})
export class EventsComponent {
  title = 'Kiliar\'s Claendar test page';
  Data = [];

  constructor(private eventService: EventsService) {
    this.eventService.response$.subscribe(a => this.Data = a);
  }
}
