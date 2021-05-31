import { genElem } from "../utilities/dom";

export default class SearchInput {
  constructor($elem, onInputChanged) {
    const $searchInput = <HTMLInputElement>genElem($elem, {
      tagName: "input",
      className: "search_bar_input",
    });

    $searchInput.addEventListener("keyup", onInputChanged);
  }
}
