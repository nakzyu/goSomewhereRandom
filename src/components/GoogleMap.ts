import $ from "../utilities/selector";
export default class GoogleMap {
  public map: google.maps.Map;

  constructor() {
    this.init();
  }

  private init() {
    this.map = new google.maps.Map($("#nav"), {
      zoom: 8,
    });
    const panorama = new google.maps.StreetViewPanorama($("#pano"));
    this.map.setStreetView(panorama);
  }
}
