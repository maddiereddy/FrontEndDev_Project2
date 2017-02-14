import { Component, OnInit  } from '@angular/core';

import { Router } from '@angular/router';
import { EventStoreService } from '../../services/event-store.service';
import { EventItem } from '../../model/event-item.model';

@Component({
  selector: 'new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  private router: Router;
  private event: EventItem;
  private events: EventItem[]
  private eventService: EventStoreService;

  //initialize variables and create a new product for adding to list of products
  constructor(router: Router, eventService: EventStoreService) {
    this.router = router;
    this.eventService = eventService;
    this.event = new EventItem(0, "","","","","","","","","","", 0, 0,"", false);
  }

  ngOnInit(): void {
    this.getEvents();
}

  //gets sorted array of product objects
  getEvents(): void {
    this.eventService
    .getEvents()
    .then(events => this.events = events);
}

  //use the sorted array of products to find the id of the last product
  //create a new id by incrementing the highest id by 1
  //then call the create method in the service
  addEvent(): void{
    this.event.startTime = this.event.date + ' ' + this.event.startTime
    this.event.endTime = this.event.date + ' ' + this.event.endTime
    this.event.id = this.events[this.events.length - 1].id + 1
    this.eventService.create(this.event)
      .then(() => this.back());
  }

  //go back to the product list table and check if new product is at bottom of list
  back(): void {
    let link = ['/events'];
    this.router.navigate(link);
  }

}
