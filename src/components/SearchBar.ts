import { MapMetadata } from "../types/Map";
import { Store } from "../types/Store";
import { COUNTRIES } from "../utilities/constants";
import { setGoogleMapToRandomCoords } from "../utilities/coords";
import { store } from "../utilities/store";
import SearchInput from "./searchInput";
import SearchResult from "./searchResult";
import { genElem } from "../utilities/dom";

export default class SearchBar {
  private $parentElem: HTMLElement;
  private countries: ReadonlyArray<MapMetadata>;
  private searchResult: SearchResult;
  private store: Store;

  constructor($elem) {
    this.$parentElem = $elem;
    this.store = store;
    this.init();
  }

  private init(): void {
    const $wrapper = genElem(this.$parentElem, {
      tagName: "div",
      className: "search_bar_wrapper",
    });
    this.countries = this.mapCountriesNamesToSearch(COUNTRIES);
    new SearchInput($wrapper, this.onInputChanged.bind(this));
    this.searchResult = new SearchResult(
      $wrapper,
      this.onCountrySelected.bind(this)
    );
  }

  /*
   *
   */
  private onInputChanged({ target }): void {
    // if no character typed, return nothing
    if (!target.value) {
      this.searchResult.update([]);
      return;
    }
    this.searchResult.update(
      this.countries.filter(({ name }) => name.includes(target.value))
    );
  }

  private onCountrySelected({ target }): void {
    if (target.tagName === "LI") {
      const country = this.countries.find(
        ({ name }) => name == target.innerText
      );
      setGoogleMapToRandomCoords((this.store.meta = country), this.store);
    }
  }

  private mapCountriesNamesToSearch(
    countries: ReadonlyArray<MapMetadata>
  ): ReadonlyArray<MapMetadata> {
    return countries.map((country) => ({
      ...country,
      name: country.name.toLowerCase(),
    }));
  }
}
