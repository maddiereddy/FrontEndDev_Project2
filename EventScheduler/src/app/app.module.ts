import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app-root/app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventComponent } from './components/event/event.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { ArchiveListComponent } from './components/archive-list/archive-list.component';
import { ArchivePageComponent } from './components/archive-page/archive-page.component';
import { PageNotFoundComponent } from './components/not-found.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { EventStoreService } from './services/event-store.service'

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AddEventComponent,
    EditEventComponent,
    EventListComponent,
    EventPageComponent,
    ArchiveListComponent,
    ArchivePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [EventStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
