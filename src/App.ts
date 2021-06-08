import GoogleMap from "./components/googleMap";
import Loader from "./utilities/mapLoader";
import {
  getRandomMapMeta,
  setGoogleMapToRandomCoords,
} from "./utilities/coordsHelper";
import Panel from "./components/panel";
import { store } from "./utilities/store";

export default function App(): void {
  const init = async (): Promise<void> => {
    await Loader.load();
    store.map = GoogleMap();
    store.streetViewService = new google.maps.StreetViewService();
    setGoogleMapToRandomCoords(getRandomMapMeta(), store);
    Panel();
  };
  init();
}
