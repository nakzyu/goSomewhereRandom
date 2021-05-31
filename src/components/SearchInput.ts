import Element from "./element";

export default class SearchInput {
  constructor($elem, onInputChanged) {
    const $searchInput = <HTMLInputElement>new Element($elem, {
      tagName: "input",
      className: "search_bar_input",
    }).$elem;

    $searchInput.addEventListener("keyup", onInputChanged);
  }
}
