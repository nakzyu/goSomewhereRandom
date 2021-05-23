export default class GoogleMap {
  constructor() {
    this.init();
  }

  private init() {
    const map = new google.maps.Map(document.getElementById("nav"), {
      zoom: 14,
      center: new google.maps.LatLng(54.976, -2.021),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano")
    );

    map.setStreetView(panorama);

    console.log(map);

    const streetView = map.getStreetView();

    streetView.setPosition(new google.maps.LatLng(54.976, -2.021));
  }
}
