import {Component} from '@angular/core';
import {EventsService} from './events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [EventsService]
})
export class AppComponent {
  title = 'Kiliar\'s Claendar test page';
  userLogin = this.eventService.getUser();

  // Data = [];
  constructor(private eventService: EventsService) {
    this.eventService.userStream$.subscribe(a => this.userLogin = a);
  }
}
