import { MapMetadata } from "../types/Map";
import { genElem } from "../utilities/domHelper";

import "./searchResult.css";
export default function SearchResult(
  $elem: HTMLElement,
  onCountrySelected: (event: MouseEvent) => void
): (countries: ReadonlyArray<MapMetadata>) => void {
  const $ul: HTMLUListElement = <HTMLUListElement>genElem($elem, {
    tagName: "ul",
    className: "search_bar_result",
  });

  $ul.addEventListener("click", onCountrySelected);

  /**
   * update search result accroding to MapMetadata array
   * @param countries
   */
  const update = (countries: ReadonlyArray<MapMetadata>): void => {
    $ul.innerHTML = countries.map(makeCountryToListString).join("");
  };

  const makeCountryToListString = (country: MapMetadata): string =>
    `<li class="search_bar_result_li">${country.name}</li>`;

  return update;
}
