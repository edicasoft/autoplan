import {Component, OnInit} from '@angular/core';

import {Event} from '../shared/event';
import {EventService} from '../shared/event.service';
import  {Router} from '@angular/router';
import {AddMinutesPipe} from 'ngx-date-fns/add-minutes.pipe';
//TODO:: use clear date-fns, filter past date, format date 
@Component({
  selector: 'create-event',

  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  providers: [EventService]
})
export class CreateEventComponent implements OnInit{
  event: Event;
  title = 'Create event';
  constructor(private eventService:EventService, private router:Router,
              private addMinutesPipe: AddMinutesPipe) {
  }
  ngOnInit():void {
    this.event = new Event();
  }

  onSubmit(form: any) {
    if (form.valid) {
      let minutes = form.value.time.minute + form.value.time.hour * 60;
      let datetime = this.addMinutesPipe.transform(form.value.date, minutes);
      console.log("Form Submitted!", datetime);
     // form.reset();
    }
  }
}
