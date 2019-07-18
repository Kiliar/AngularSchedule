import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EventBoxComponent} from './event-box/event-box.component';
import {ActionsComponent} from './actions/actions.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'events', component: EventsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EventBoxComponent,
    ActionsComponent,
    LoginComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
