import {Component} from '@angular/core';
import {EventsService} from '../events.service';

const minToMinToPxCoeff = 2;

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.less'],
  providers: []
})
export class EventBoxComponent {
  minToMinToPxCoeff = minToMinToPxCoeff;
  timeStamp = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00'
  ];
  formatted = [];

  constructor(private eventData: EventsService) {
    eventData.response$.subscribe(e => this.formatEvents(e));
  }

  formatEvents(events) {
    let e = [];
    events.sort((a, b) => a.timeStart - b.timeStart);
    events.forEach(el => e.push(formatData(el)));
    this.formatted = depthChecker(e);
  }
}

const formatData = (rawData) => {
  return {
    text: rawData.title,
    startPX: rawData.start * minToMinToPxCoeff,
    heightPX: rawData.duration * minToMinToPxCoeff,
    depth: 1,
    depthLevel: 1,
  };
};
const depthChecker = (events) => {
  events.forEach(event => {
    const subEvents = events.filter(e => e.startPX < (event.startPX + event.heightPX) && e.startPX > event.startPX);
    if (subEvents.length > 0) {
      depthChecker(subEvents);
      subEvents.forEach(e => e.depth++);
      subEvents.forEach(e => e.depthLevel++);
      event.depth++;
    }
  });
  return events;
};
