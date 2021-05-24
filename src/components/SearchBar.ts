import Element from "./Element";

export default class SearchBar {
  private $parentElem: HTMLElement;

  private $searchInput: HTMLInputElement;
  private $resultUl: HTMLUListElement;

  constructor($elem) {
    this.$parentElem = $elem;
    this.init();
  }

  private init(): void {
    const $wrapper = new Element(this.$parentElem, {
      tagName: "div",
      className: "search_bar_wrapper",
    }).$elem;

    this.$searchInput = <HTMLInputElement>new Element($wrapper, {
      tagName: "input",
      className: "search_bar_input",
    }).$elem;

    this.$resultUl = <HTMLUListElement>new Element($wrapper, {
      tagName: "ul",
      className: "search_bar_result",
    }).$elem;
  }
}
