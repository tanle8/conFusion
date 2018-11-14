import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // First test
  it('should display welcome message Ristorante Con Fusion', () => {
    // Access to project root directory
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });

  // Second test
  it('should navigate to "about us" page by clicking on the link', () => {
    page.navigateTo('/');
    // With getAllElement() function with 'a' parameter, we access to all
    // HTML a tags in header component HTML file.
    // We want to select specific element, so using `.get()` with that element's index
    // as parameter.
    const navlink =   page.getAllElements('a').get(1);
    // We use click() to programmatically causes a click on that link
    navlink.click();
    expect(page.getParagraphText('h3')).toBe('About Us');
  });

  // Third test
  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');
  });


});
