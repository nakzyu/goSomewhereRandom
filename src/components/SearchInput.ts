import { genElem } from "../utilities/dom";
import "./searchInput.css";

export default function SearchInput(
  $elem: HTMLElement,
  onInputChanged: (event: KeyboardEvent) => void
): void {
  const $parentElem: HTMLElement = $elem;
  const init = (): void => {
    const $searchInputWrapper = genElem($parentElem, {
      tagName: "div",
      className: "search_bar_input_wrapper",
    });

    const $searchInput = <HTMLInputElement>genElem($searchInputWrapper, {
      tagName: "input",
      className: "search_bar_input",
    });

    <HTMLImageElement>genElem($searchInputWrapper, {
      tagName: "img",
      className: "search_bar_img",
      src: "./search.svg",
    });

    $searchInput.addEventListener("keyup", onInputChanged);
  };

  init();
}
