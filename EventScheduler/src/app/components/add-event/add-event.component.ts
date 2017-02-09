import { Component } from '@angular/core';
import { EventStoreService } from "../../services/event-store.service";

//Create a new event

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  newItemText = '';
  store: EventStoreService;

  constructor(store: EventStoreService) {
    this.store = store;
  }

  addItem() {
    console.log(`I'm here`);
  }

}
