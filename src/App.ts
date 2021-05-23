import GoogleMap from "./components/GoogleMap";
import Loader from "./utilities/mapLoader";

export default class App {
  constructor($elem: HTMLElement) {
    this.init();
  }

  async init() {
    await Loader.load();
    new GoogleMap();
  }
}
