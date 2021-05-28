import GoogleMap from "./components/GoogleMap";
import Loader from "./utilities/mapLoader";
import {
  getNearestPanorama,
  getRandomLatLng,
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "./utilities/coords";
import { COUNTRIES } from "./utilities/constants";
import $ from "./utilities/selector";
import { MapMetadata } from "./types/Map";
import { Store } from "./types/Store";
import Element from "./components/Element";
import SearchBar from "./components/SearchBar";

export default class App {
  private store: Store = {
    map: <google.maps.Map>null,
    streetViewService: <google.maps.StreetViewService>null,
    meta: <MapMetadata>null,
  };

  constructor() {
    this.init();
  }

  private async init(): Promise<void> {
    await Loader.load();
    this.store.map = new GoogleMap().map;
    this.store.streetViewService = new google.maps.StreetViewService();
    setGoogleMapToRandomCoords(getRandomMapMeta(), this.store);

    this.apppendElements();
  }

  private apppendElements(): void {
    const $panelDiv = $(".panel");

    new SearchBar($panelDiv, this.store);

    new Element($panelDiv, {
      tagName: "button",
      className: "button",
      innerText: "global",
    }).$elem.addEventListener("click", () =>
      setGoogleMapToRandomCoords(getRandomMapMeta(), this.store)
    );

    new Element($panelDiv, {
      tagName: "button",
      className: "button",
      innerText: "in country",
    }).$elem.addEventListener("click", () =>
      setGoogleMapToRandomCoords(this.store.meta, this.store)
    );
  }
}
