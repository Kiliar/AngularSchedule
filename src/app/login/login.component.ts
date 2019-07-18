import {Component, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  login: '';

  constructor(private eventData: EventsService, private router: Router) {
  }

  goToEvents() {
    if (!this.login) {
      return;
    }
    this.eventData.setUser(this.login);
    this.router.navigate(['events']);
  }

  ngOnInit() {
  }

}
