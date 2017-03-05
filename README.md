# FrontEndDev_Project2
Final Project for the Front End Web Dev course at Acagild  

Used angular cli for creating and running the app (use ng serve and go to localhost:4200 to see app running)  

<b><i><u>Event Scheduler:  
1. Used in-memory web api. It intercepts Angular Http requests that would otherwise go to the remote server via the Angular XHRBackend service  
2. Main page has a list of current events  
3. Can choose to see list of current events or a list of archived events 
4. Each event displays information about the event  
5. User can upvote or downvite an event  
6. User can also cancel an event and doing so removes the event from the list and moves it to the archive page  
7. User can edit the event and that takes them to the edit page  
8. User can edit the event info and click the update button. Or, go back  
9. User can add a new event. Basic form validation implemented. Adding the event will add it to the current event list  
10. Archived events page has list of events past the current date and also a list of cancelled events   

<b><i><u>Not implented wish list:  
1. Do more form validation like check to see if start time < end time  
2. Do validation for the edit event page  
3. Implement a custom pipe for date time format  
4. Do some unit testing   