import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventStoreService } from "../../services/event-store.service";
import { EventItem } from "../../model/event-item.model";

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  private events: EventItem[];
  private router: Router;
  private eventService: EventStoreService;

  constructor( eventService: EventStoreService, router: Router){
    this.router = router;
    this.eventService = eventService;
  }

  ngOnInit(): void {
    this.getEvents();
  }

  //get list of events
  getEvents(): void {
    this.eventService
      .getActiveEvents()
      .then(events => this.events = events)
      .catch((ex) => {
        console.error('Error fetching events', ex)
      });
  }

  //increment upvotes counter
  upVote(item: EventItem): void{
    item.upvotes++;
    this.updateEvent(item);
  }

  //increment downvotes counter
  downVote(item: EventItem): void{
    item.downvotes++;
    this.updateEvent(item);
  }

  //update event to save the upvote, downvote, cancelled changes
  updateEvent(item: EventItem): void{
    this.eventService.update(item);
  }

  //cancel flag set
  cancelEvent(item: EventItem): void{
    item.cancelled = true;
    this.updateEvent(item);
    this.getEvents();
  }

  //cancel flag un-set
  unCancelEvent(item: EventItem): void{
    item.cancelled = false;
    this.updateEvent(item);
    this.getEvents();
  }

  //called by the Add New button click event to open a page which leads to creating a new product
  addNew(): void{
    this.router.navigate(['/add']);
  }

}
