import {Component} from '@angular/core';

import {Event} from '../shared/event';
import {EventService} from '../shared/event.service';
import  {Router} from '@angular/router';

@Component({
  selector: 'create-event',

  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  providers: [EventService]
})
export class CreateEventComponent {

  submitted = false;
  model = new Event();
  onSubmit() { this.submitted = true; }
  title = 'Create event';

  constructor(private eventService:EventService, private router:Router) {
  }
  add(text:string):void {

  }
}
