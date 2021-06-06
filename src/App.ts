import GoogleMap from "./components/googleMap";
import Loader from "./utilities/mapLoader";
import {
  getNearestPanorama,
  getRandomLatLng,
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "./utilities/coords";
import { MapMetadata } from "./types/Map";
import { Store } from "./types/Store";
import Panel from "./components/panel";
import { store } from "./utilities/store";

export default class App {
  private store: Store;
  constructor() {
    this.store = store;
    this.init();
  }

  private async init(): Promise<void> {
    await Loader.load();
    this.store.map = new GoogleMap().map;
    this.store.streetViewService = new google.maps.StreetViewService();
    setGoogleMapToRandomCoords(getRandomMapMeta(), this.store);
    new Panel();
  }
}
