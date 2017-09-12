import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {DateFnsModule} from 'ngx-date-fns';
import {AddMinutesPipe} from 'ngx-date-fns/add-minutes.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MdDatepickerModule,
    MdNativeDateModule,
    DateFnsModule
  ],
  providers: [AddMinutesPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
