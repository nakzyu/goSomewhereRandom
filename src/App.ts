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

export default class App {
  private store: Store = {
    map: <google.maps.Map>null,
    streetViewService: <google.maps.StreetViewService>null,
    meta: <MapMetadata>null,
  };

  constructor() {
    this.init();
  }

  private async init() {
    await Loader.load();
    this.store.map = new GoogleMap().map;
    this.store.streetViewService = new google.maps.StreetViewService();

    setGoogleMapToRandomCoords(getRandomMapMeta(), this.store);

    new Element($(".panel"), {
      tagName: "button",
      className: "button",
      innerText: "global",
    }).$createdElem.addEventListener("click", () =>
      setGoogleMapToRandomCoords(getRandomMapMeta(), this.store)
    );

    new Element($(".panel"), {
      tagName: "button",
      className: "button",
      innerText: "in here",
    }).$createdElem.addEventListener("click", () =>
      setGoogleMapToRandomCoords(this.store.meta, this.store)
    );
  }
}
