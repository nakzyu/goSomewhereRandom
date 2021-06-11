import { MapMetadata } from "../types/Map";
import { COUNTRIES } from "../utilities/constants";
import { setGoogleMapToRandomCoords } from "../utilities/coordsHelper";
import { store } from "../utilities/store";
import SearchInput from "./searchInput";
import SearchResult from "./searchResult";
import { genElem } from "../utilities/domHelper";

import "./searchBar.css";

export default function SearchBar($elem: HTMLElement): void {
  const $parentElem: HTMLElement = $elem;
  const $wrapper = genElem($parentElem, {
    tagName: "div",
    className: "search_bar_wrapper",
  });
  let countries: ReadonlyArray<MapMetadata> = [];
  let updateSearchResult;

  const onCountrySelected = (event: MouseEvent): void => {
    const target = event.target as HTMLLIElement;
    if (target.tagName === "LI") {
      const country = countries.find(({ name }) => name == target.innerText);
      setGoogleMapToRandomCoords((store.meta = country), store);
    }
  };

  const onInputChanged = (event: KeyboardEvent): void => {
    const target = event.target as HTMLInputElement;
    // if no character typed, return nothing
    if (!target.value) {
      updateSearchResult([]);
      return;
    }
    updateSearchResult(
      countries.filter(({ lowerCased }) =>
        lowerCased.includes(target.value.toLowerCase())
      )
    );
  };

  const mapCountriesNamesToSearch = (
    countries: ReadonlyArray<MapMetadata>
  ): ReadonlyArray<MapMetadata> =>
    countries.map((country) => ({
      ...country,
      name: country.name,
      lowerCased: country.name.toLowerCase(),
    }));

  const init = (): void => {
    countries = mapCountriesNamesToSearch(COUNTRIES);
    SearchInput($wrapper, onInputChanged);

    updateSearchResult = SearchResult($wrapper, onCountrySelected);
  };

  init();
}
