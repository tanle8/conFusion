import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    // Enable our application to browse to the particular link that is
    // supplied as a parameter here. By default (`get('/')` - slash) which
    // means that the root of our angular application.
    return browser.get(link);
  }

  /**
   * This method is used to obtain the inner content of an HTML element,
   * The element method allows you to get access to an HTML element by providing
   * the selection folder HTML element as a parameter here.
   *
   * @param selector
   */
  getParagraphText(selector: string) {

    return element(by.css(selector)).getText();
  }

  /**
   * Return reference to that element itself, we can use this method as an additional way
   * to fetch additional information from that element, so that's why I created this method
   * @param selector
   */
  getElement(selector: string) {
    return element(by.css(selector));
  }

  /**
   * Allow us to access all the elements that match this particular selector
   * @param selector
   */
  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
