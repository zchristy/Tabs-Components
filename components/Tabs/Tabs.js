
class Tab {
  constructor(tabElement, linkElement) {
    this.tabElement = tabElement;
    this.linkElement = linkElement;

    this.tabsLink = new TabLink(this.linkElement, this.tabElement);

    this.deselect = this.deselect.bind(this);
    this.linkElement.addEventListener('click', this.deselect);
  };

  deselect() {
    this.tabsLink.deselect();
    this.tabsLink.select();

  }
}


class TabLink {
  constructor(element, tabElement) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    this.tabElement = tabElement;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = tabElement.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement, this.tabElement);

    // Add a click event listener on this instance, calling the select method on click
    // this.select = this.select.bind(this);
    // this.element.addEventListener('click', this.select);
  };

  deselect() {
    const links = this.tabElement.querySelectorAll('.tabs-link');

    links.forEach(function(link) {
      link.classList.remove('tabs-link-selected');
    });

    this.tabItem.deselect();
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = this.tabElement.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(function(link) {
      link.classList.remove('tabs-link-selected');
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element, tabElement) {
    // Assign this.element to the passed in element
    this.element = element;
    this.tabElement = tabElement;
  }

  deselect() {
    const content = this.tabElement.querySelectorAll('.tabs-item');

    content.forEach(function(item) {
      item.classList.remove('tabs-item-selected');
    });
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items = this.tabElement.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    // items.forEach(function(link) {
    //   link.classList.remove('tabs-item-selected');
    // });

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable


- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/
const tabs = document.querySelectorAll('.tabs');

tabs.forEach(function(tabElement) {
  const links = tabElement.querySelectorAll('.tabs-link');

  links.forEach(function(linkElement) {
    new Tab(tabElement, linkElement);
  });
});
