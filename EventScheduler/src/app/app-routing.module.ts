import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { EventPageComponent }   from './components/event-page/event-page.component';
import { EditEventComponent }   from './components/edit-event/edit-event.component';
import { NewEventComponent }   from './components/new-event/new-event.component';
import { ArchivePageComponent } from './components/archive-page/archive-page.component';
import { PageNotFoundComponent } from './components/not-found.component';


//creating routes for the pages

const appRoutes: Routes = [
    { path: 'events', component: EventPageComponent },        //main page
    { path: 'events/:id', component: EditEventComponent },    //display selected event for edit/view
    { path: 'add', component: NewEventComponent },            //add new event
    { path: 'archive', component: ArchivePageComponent} ,     //display archived and cancelled events
    { path: '',   redirectTo: '/events', pathMatch: 'full' }, //default route
    { path: '**', component: PageNotFoundComponent }          //page not found page
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)   //, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

