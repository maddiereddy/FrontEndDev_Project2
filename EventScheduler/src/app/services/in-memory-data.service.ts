import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let events = [
      { id: 1, "name": "Migrating from Angular1 to Angular2", "speaker": "Andy Rooney", "date": "01/31/2017",
        "startTime": "01/31/2017 05:00 PM", "endTime": "01/31/2017 07:00 PM",
        "address1": "Auditorium, Riverdale High School", "address2": "1001 Harz Ave", "city": "Riverdale", "state": "CA", "zip": "94526", "upvotes": 0,
        "downvotes": 0, "details": "Will present advantages and differences between Angular1 and the newer Angular2 frameworks", "cancelled": false},

      { id: 2, "name": "Angular2 vs React", "speaker": "Quincy Larson", "date": "02/14/2017",
        "startTime": "02/14/2017 18:00", "endTime": "02/14/2017 20:00",
        "address1": "Room 302, Civic Center", "address2": "1 Civic Center Way", "city": "San Jose", "state": "CA", "zip": "95010", "upvotes": 2,
        "downvotes": 0, "details": "Will discuss differences between Angular React frameworks", "cancelled": false},

      { id: 3, "name": "Angular2 Components", "speaker": "Jason Watmore", "date": "02/25/2017",
        "startTime": "02/25/2017 03:00 PM", "endTime": "02/25/2017 04:00 PM",
        "address1": "Suite 102, HP Convention Center", "address2": "1000 Main Street", "city": "San Francisco", "state": "CA", "zip": "94040",  "upvotes": 3,
        "downvotes": 1, "details": "Angular 2 Components will be discussed in detail", "cancelled": false},

      { id: 4, "name": "Intro to NodeJS", "speaker": "Jake Tapper", "date": "03/31/2017",
        "startTime": "03/31/2017 05:30 PM", "endTime": "03/31/2017 07:00 PM",
        "address1": "Room 209, Bldg 4, Google Campus ", "address2": "1 Google Way", "city": "Cupertino", "state": "CA", "zip": "95014",  "upvotes": 0,
        "downvotes": 1, "details": "Essentials of NodeJS are introduced - beginner level", "cancelled": false}
    ]
    return {events};
  }
}
