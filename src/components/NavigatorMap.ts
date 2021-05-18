import Component from "./GoogleMap";
import Loader from "../utilities/mapLoader";
import $ from "../utilities/selector";
import Props from "../types/Props";
import MapConfigs from "../types/MapConfigs";
import GoogleMap from "./GoogleMap";

export default class NavigatorMap extends GoogleMap {
  constructor(props: Props, mapConfigs: MapConfigs) {
    super(props, mapConfigs);
    this.init();
  }

  private async init(): Promise<void> {
    await Loader.load();

    this.props.services.mapService[this.mapConfigs.id] = new google.maps.Map(
      $(`#${this.mapConfigs.id}`) as HTMLElement,
      {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      }
    );

    setTimeout(() => {
      this.props.services.mapService[this.mapConfigs.id].setCenter({
        lat: -34.397,
        lng: 98.644,
      });
    }, 6000);
  }
}
