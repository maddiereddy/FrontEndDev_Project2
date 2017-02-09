import { EventSchedulerPage } from './app.po';

describe('event-scheduler App', function() {
  let page: EventSchedulerPage;

  beforeEach(() => {
    page = new EventSchedulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
