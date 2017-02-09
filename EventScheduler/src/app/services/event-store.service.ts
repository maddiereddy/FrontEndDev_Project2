import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { EventItem } from '../model/event-item.model';
import 'rxjs/add/operator/toPromise';

/*********************************************************************************
 1. Used `https://angular.io/docs/ts/latest/tutorial/toh-pt6.html` as reference
 2. Since I did not have a web server like express (to do save and delete operations),
 I simulated a mock in-memory server using the in-memory web API. Only to be used
 in development stage! Since it is in-memory, data is not actually saved and will be
 lost each time you re-run the app.
 3. Used Promises
 4. After data is retrieved in the get operation, data object array is sorted
 and then sent to calling component
 5. Have implemented all CRUD operations
 *********************************************************************************/


@Injectable()
export class EventStoreService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private eventUrl = 'api/events';  // URL to web api

  constructor(private http: Http) { }


  items: EventItem[] = [];
  archive: EventItem[] = [];

  //retrieve all events
  getEvents(): Promise<EventItem[]> {
    return this.http.get(this.eventUrl)
        .toPromise()
        .then(response => response.json().data.sort((a,b) => a.id - b.id) as EventItem[]) //sorting the array of data objects
        .catch(this.handleError);
  }

  //retrieve event by id
  getEvent(id: number): Promise<EventItem> {
    const url = `${this.eventUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as EventItem)
        .catch(this.handleError);
  }

  //update selected event by id
  update(event: EventItem): Promise<EventItem> {
    const url = `${this.eventUrl}/${event.id}`;
    return this.http
        .put(url, JSON.stringify(event), {headers: this.headers})
        .toPromise()
        .then(() => event)
        .catch(this.handleError);
  }

  //create a new event object and save
  create(event: EventItem): Promise<EventItem> {
    return this.http
        .post(this.eventUrl, JSON.stringify(event), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }

  //delete selected event by id
  delete(event: EventItem): Promise<void> {
    const url = `${this.eventUrl}/${event.id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  //error handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
