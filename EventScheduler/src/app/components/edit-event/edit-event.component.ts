import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { EventItem } from "../../model/event-item.model";
import { EventStoreService } from '../../services/event-store.service';

//user can view the selected event

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  private item: EventItem;
  private sub: any

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private store: EventStoreService) {

  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      //this.item = this.store.getEvent(id);
    });
  }

  back(): void {
    this.location.back();
  }

}
