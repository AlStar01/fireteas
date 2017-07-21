import { FireteasPage } from './app.po';

describe('fireteas App', () => {
  let page: FireteasPage;

  beforeEach(() => {
    page = new FireteasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
