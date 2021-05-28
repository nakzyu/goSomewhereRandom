import { MapMetadata } from "../types/Map";
import { Store } from "../types/Store";
import { COUNTRIES } from "../utilities/constants";
import { setGoogleMapToRandomCoords } from "../utilities/coords";
import Element from "./Element";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

export default class SearchBar {
  private $parentElem: HTMLElement;
  private countries: ReadonlyArray<MapMetadata>;
  private searchResult: SearchResult;
  private store: Store;

  constructor($elem, store: Store) {
    this.$parentElem = $elem;
    this.store = store;
    this.init();
  }

  private init(): void {
    const $wrapper = new Element(this.$parentElem, {
      tagName: "div",
      className: "search_bar_wrapper",
    }).$elem;

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
    this.searchResult.update(
      this.countries.filter(({ name }) => name.includes(target.value))
    );
  }

  private onCountrySelected({ target }): void {
    if (target.tagName === "LI") {
      console.log(target.innerText);
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
