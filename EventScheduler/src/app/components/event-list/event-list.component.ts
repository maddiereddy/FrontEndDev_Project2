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

  getEvents(): void {
    this.eventService
        .getEvents()
        .then(events => {
          this.events = events
          console.log(`Events: ${events}`)
        });
  }

  //called by the Add New button click event to open a page which leads to creating a new product
  addNew(): void{
    this.router.navigate(['/add']);
  }

  removeItem(item: EventItem) {
    this.eventService.delete(item);
  }

}
