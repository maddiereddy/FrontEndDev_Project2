import { Component, OnInit } from '@angular/core';
import { EventStoreService } from "../../services/event-store.service";
import { EventItem } from "../../model/event-item.model";

@Component({
  selector: 'archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent {
  private events: EventItem[]; //cancelled events
  private events2: EventItem[]; //expired events
  private count: number;
  private eventService: EventStoreService;

  constructor( eventService: EventStoreService){
    this.eventService = eventService;
  }

  ngOnInit(): void {
    this.getEvents(); //cancelled events
    this.getEvents2(); //expired events
  }

  getEvents(): void {
    this.eventService
      .getCancelledEvents()
      .then(events => {
        this.events = events
        this.count = this.events.length;
      })
      .catch((ex) => {
        this.count = 0
        console.error('Error fetching events', ex)
      });
  }

  getEvents2(): void {
    this.eventService
      .getExpiredEvents()
      .then(events => this.events2 = events)
      .catch((ex) => {
        console.error('Error fetching events', ex)
      });
  }

  updateEvent(item: EventItem): void{
    this.eventService.update(item);
  }

  cancelEvent(item: EventItem): void{
    item.cancelled = true;
    this.updateEvent(item);
    this.getEvents();
  }

  unCancelEvent(item: EventItem): void{
    item.cancelled = false;
    this.updateEvent(item);
    this.getEvents();
  }

}
