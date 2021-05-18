import NavigatorMap from "./components/NavigatorMap";
import PanoramaMap from "./components/PanoramaMap";
import GoogleMap from "./components/PanoramaMap";
import MapService from "./services/MapService";
import { Maps } from "./types/MapConfigs";
import Props from "./types/Props";

export default class App {
  constructor($elem: HTMLElement) {
    const props: Props = {
      $elem,
      services: { mapService: new MapService() },
    };
    new NavigatorMap(props, { id: Maps.NAVIGATOR });
    new PanoramaMap(props, { id: Maps.PANORAMA });
  }
}
