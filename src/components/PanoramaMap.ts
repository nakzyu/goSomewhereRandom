import Component from "./GoogleMap";
import Loader from "../utilities/mapLoader";
import $ from "../utilities/selector";
import Props from "../types/Props";
import MapConfigs from "../types/MapConfigs";
import GoogleMap from "./GoogleMap";

export default class PanoramaMap extends GoogleMap {
  constructor(props: Props, mapConfigs: MapConfigs) {
    super(props, mapConfigs);
    this.init();
  }

  private async init(): Promise<void> {
    await Loader.load();
    const fenway = { lat: 42.345573, lng: -71.098326 };

    new google.maps.StreetViewPanorama(
      $(`#${this.mapConfigs.id}`) as HTMLElement,
      {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10,
        },
      }
    );
  }
}
