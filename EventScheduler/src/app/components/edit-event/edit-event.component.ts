import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventItem } from "../../model/event-item.model";
import { EventStoreService } from '../../services/event-store.service';
import 'rxjs/add/operator/switchMap';

//user can view the selected event

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  private item: EventItem;
  private router: Router;
  private route: ActivatedRoute;
  private eventService: EventStoreService;

  constructor(route: ActivatedRoute, router: Router, eventService: EventStoreService) {
    this.router = router;
    this.route = route;
    this.eventService = eventService;
  }

  //used params to get the id to be passed along to the service call to get a
  //particular product to edit/save or delete

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.eventService.getEvent(+params['id']))
      .subscribe(item => this.item = item);
  }

  updateEvent(): void{
    this.eventService.update(this.item)
      .then(() => this.back());
  }

  //go back to product list page
  back(): void {
    let link = ['/events'];
    this.router.navigate(link);
  }

}
