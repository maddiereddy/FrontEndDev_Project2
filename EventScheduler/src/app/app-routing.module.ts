import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { EventPageComponent }   from './components/event-page/event-page.component';
import { EditEventComponent }   from './components/edit-event/edit-event.component';
import { AddEventComponent }   from './components/add-event/add-event.component';
import { ArchivePageComponent } from './components/archive-page/archive-page.component';
import { PageNotFoundComponent } from './components/not-found.component';

const appRoutes: Routes = [
    { path: 'events', component: EventPageComponent },
    { path: 'events/:id', component: EditEventComponent },
    { path: 'add', component: AddEventComponent },
    { path: 'archive', component: ArchivePageComponent} ,
    { path: '',   redirectTo: '/events', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
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

