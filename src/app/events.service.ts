import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class EventsService {
  serverResponse = [                         // 0 - 8 a.m.
    {                               // 540 - 8 a.m.
      start: 0,
      duration: 15,
      title: 'Task 1',
    },
    {
      start: 25,
      duration: 30,
      title: 'Task 2',
    },
    {                               // 540 - 8 a.m.
      start: 30,
      duration: 30,
      title: 'Task 3',
    },
    {                               // 540 - 8 a.m.
      start: 60,
      duration: 15,
      title: 'Task 4',
    },
    {                               // 540 - 8 a.m.
      start: 100,
      duration: 15,
      title: 'Task 5',
    },
    {                               // 540 - 8 a.m.
      start: 180,
      duration: 90,
      title: 'Task 6',
    },
    {                               // 540 - 8 a.m.
      start: 360,
      duration: 30,
      title: 'Task 7',
    },
    {                               // 540 - 8 a.m.
      start: 370,
      duration: 45,
      title: 'Task 8',
    },
    {                               // 540 - 8 a.m.
      start: 405,
      duration: 30,
      title: 'Task 9',
    },
  ];
  private loginUser = '';
  private responseSource = new BehaviorSubject(this.serverResponse);
  response$ = this.responseSource.asObservable();
  private userStream = new BehaviorSubject(this.loginUser);
  userStream$ = this.userStream.asObservable();

  constructor() {

  }

  setUser = user => this.userStream.next(user);
  getUser = () => this.loginUser;
  addEvent = event => {
    this.serverResponse.push(event);
    this.responseSource.next(this.serverResponse);
    console.log(this.serverResponse);
  }
}
