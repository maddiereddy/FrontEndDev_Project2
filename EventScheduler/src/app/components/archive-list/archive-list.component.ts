import { Component, OnInit } from '@angular/core';
import { EventStoreService } from "../../services/event-store.service";
import { EventItem } from "../../model/event-item.model";

@Component({
  selector: 'archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent {
  private cancelledEvents: EventItem[]; //cancelled events
  private expiredEvents: EventItem[]; //expired events
  private count: number;
  private eventService: EventStoreService;

  constructor( eventService: EventStoreService){
    this.eventService = eventService;
  }

  ngOnInit(): void {
    this.getCancelledEvents(); //cancelled events
    this.getExpiredEvents();   //expired events
  }

  getCancelledEvents(): void {
    this.eventService
      .getCancelledEvents()
      .then(events => {
        this.cancelledEvents = events
        this.count = this.cancelledEvents.length;
      })
      .catch((ex) => {
        this.count = 0
        console.error('Error fetching events', ex)
      });
  }

  getExpiredEvents(): void {
    this.eventService
      .getExpiredEvents()
      .then(events => this.expiredEvents = events)
      .catch((ex) => {
        console.error('Error fetching events', ex)
      });
  }

  updateEvent(item: EventItem): void{
    this.eventService.update(item);
  }

  //set cancel flag to true and update
  cancelEvent(item: EventItem): void{
    item.cancelled = true;
    this.updateEvent(item);
    this.getCancelledEvents();
  }

  //set cancel flag to false and update
  unCancelEvent(item: EventItem): void{
    item.cancelled = false;
    this.updateEvent(item);
    this.getCancelledEvents();
  }

}
