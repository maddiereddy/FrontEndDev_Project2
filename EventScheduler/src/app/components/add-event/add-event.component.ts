import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  constructor(private router: Router){}

  addItem(): void{
    this.router.navigate(['/add']);
  }

}
