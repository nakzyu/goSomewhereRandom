import "./googleMap.css";
import { $ } from "../utilities/dom";

export default class GoogleMap {
  public map: google.maps.Map;

  constructor() {
    this.init();
  }

  private init(): void {
    this.map = new google.maps.Map($("#nav"), {
      zoom: 8,
    });
    const panorama = new google.maps.StreetViewPanorama($("#pano"));
    this.map.setStreetView(panorama);

    console.log(this.map);
  }
}
