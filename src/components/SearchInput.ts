import { genElem } from "../utilities/dom";
import "./searchInput.css";

export default class SearchInput {
  private $parentElem: HTMLElement;
  private onInputChanged;

  constructor($elem: HTMLElement, onInputChanged) {
    this.$parentElem = $elem;
    this.onInputChanged = onInputChanged;
    this.init();
  }

  private init() {
    console.log("init");
    const $searchInputWrapper = genElem(this.$parentElem, {
      tagName: "div",
      className: "search_bar_input_wrapper",
    });
    const $searchImage = <HTMLImageElement>genElem($searchInputWrapper, {
      tagName: "img",
      className: "search_bar_img",
      src: "./search.svg",
    });

    const $searchInput = <HTMLInputElement>genElem($searchInputWrapper, {
      tagName: "input",
      className: "search_bar_input",
    });

    $searchInput.addEventListener("keyup", this.onInputChanged);
  }
}
