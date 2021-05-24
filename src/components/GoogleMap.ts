import $ from "../utilities/selector";
export default class GoogleMap {
  public map: google.maps.Map;

  constructor() {}

  public init(): GoogleMap {
    const map = new google.maps.Map($("#nav"), {
      zoom: 8,
    });

    this.map = map;

    const panorama = new google.maps.StreetViewPanorama($("#pano"));

    map.setStreetView(panorama);

    return this;
  }
}
