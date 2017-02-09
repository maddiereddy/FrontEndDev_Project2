import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let events = [
      { id: 1, "name": "Migrating from Angular1 to Angular2", "date": "01/31/2017", "startTime": "5:00pm", "endTime": "7:00pm",
        "address1": "Auditorium", "address2": "Riverdale High School", "city": "Riverdale", "state": "CA", "zip": 94526, "vote": 0,
        "detail": "Will present advantages and differences between Angular1 and the newer Angular2 frameworks", "cancelled": false},

      { id: 2, "name": "Angular2 vs React", "date": "02/14/2017", "startTime": "6:00pm", "endTime": "8:00pm",
        "address1": "Room 302", "address2": "Civic Center", "city": "San Jose", "state": "CA", "zip": 95010, "vote": 1,
        "detail": "Will discuss differences between Angular React frameworks", "cancelled": false},

      { id: 3, "name": "Angular2 Components", "date": "02/25/2017", "startTime": "3:00pm", "endTime": "4:00pm",
        "address1": "Suite 102", "address2": "HP Convention Center", "city": "San Francisco", "state": "CA", "zip": 94040, "vote": -1,
        "detail": "Angular 2 Components will be discussed in detail", "cancelled": false},

      { id: 4, "name": "Intro to NodeJS", "date": "03/31/2017", "startTime": "5:30pm", "endTime": "7:00pm",
        "address1": "Room 209, Bldg 4 ", "address2": "Google Campus", "city": "Cupertino", "state": "CA", "zip": 95014, "vote": 0,
        "detail": "Essentials of NodeJS are introduced - beginner level", "cancelled": false}
    ]
    return {events};
  }
}
