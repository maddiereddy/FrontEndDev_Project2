import {Component, Input, EventEmitter, Output} from "@angular/core";
import {EventItem} from "../../model/event-item.model";

//event  selected can be archived by clicking on the x button to the right of it
//event selected can be marked as completed by checking the check box to the left of it
//can uncheck it if user thinks it is not completed
//as long as it is not archived, user can toggle the check box

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  @Input()
  item: EventItem;

  @Output()
  done = new EventEmitter<EventItem>();

  removeClicked() {
    this.done.emit(this.item);
  }

  doneClicked(){
    this.item.cancelled = !this.item.cancelled;
  }

}
