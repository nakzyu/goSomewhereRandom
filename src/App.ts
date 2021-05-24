import GoogleMap from "./components/GoogleMap";
import Loader from "./utilities/mapLoader";
import {
  getNearestPanorama,
  getRandomLatLng,
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "./utilities/coords";
import { COUNTRIES } from "./utilities/constants";
import Button from "./components/Button";
import $ from "./utilities/selector";
import { MapMetadata } from "./types/Map";

export default class App {
  private store = {
    map: <google.maps.Map>null,
    streetViewService: <google.maps.StreetViewService>null,
    meta: <MapMetadata>null,
  };

  constructor() {
    this.init();
  }

  private async init() {
    await Loader.load();
    this.store.map = new GoogleMap().init().map;
    this.store.streetViewService = new google.maps.StreetViewService();

    setGoogleMapToRandomCoords(getRandomMapMeta(), this.store);

    new Button($(".panel"))
      .make("new Button")
      .$button.addEventListener("click", () =>
        setGoogleMapToRandomCoords(getRandomMapMeta(), this.store)
      );
  }
}
