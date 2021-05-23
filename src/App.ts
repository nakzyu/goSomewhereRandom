import GoogleMap from "./components/GoogleMap";
import MapService from "./services/MapService";
import Loader from "./utilities/mapLoader";

export default class App {
  private mapService: MapService;

  constructor($elem: HTMLElement) {
    this.init();
  }

  async init() {
    await Loader.load();
    new GoogleMap();
  }
}
