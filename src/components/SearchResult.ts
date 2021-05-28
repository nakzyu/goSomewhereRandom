import { MapMetadata } from "../types/Map";
import Element from "./Element";

export default class SearchResult {
  private $ul: HTMLUListElement;

  constructor($elem, onCountrySelected) {
    this.$ul = <HTMLUListElement>new Element($elem, {
      tagName: "ul",
      className: "search_bar_result",
    }).$elem;

    this.$ul.addEventListener("click", onCountrySelected);
  }

  /**
   * update search result accroding to MapMetadata array
   * @param countries
   */
  public update(countries: ReadonlyArray<MapMetadata>): void {
    this.$ul.innerHTML = countries.map(this.makeCountryToListString).join("");
  }

  private makeCountryToListString(country: MapMetadata): string {
    return `<li class="search_bar_result_li">${country.name}</li>`;
  }
}
