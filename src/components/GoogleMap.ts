import { COUNTRIES } from "../utilities/constants";
import { getNearestPanorama, getRandomLatLng } from "../utilities/coords";

export default class GoogleMap {
  constructor() {
    this.init();
  }

  private init() {
    const coords = getRandomLatLng(COUNTRIES[0].coordsBoundingBox);
    const map = new google.maps.Map(document.getElementById("nav"), {
      zoom: 8,
      center: coords,
    });

    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano")
    );

    map.setStreetView(panorama);

    const streetView = map.getStreetView();
    const sv = new google.maps.StreetViewService();

    getNearestPanorama(coords, sv, streetView, 1);
  }
}
