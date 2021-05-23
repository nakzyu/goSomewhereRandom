export default class MapService {
  public navigator: google.maps.Map;
  public panorama: google.maps.StreetViewPanorama;
  public svs: google.maps.StreetViewService;

  constructor() {}

  private genRandomCoords(): google.maps.LatLng {
    return;
  }

  public processSVData(
    data: google.maps.StreetViewPanoramaData | null,
    status: google.maps.StreetViewStatus
  ) {
    if (status === "OK") {
      const location = (data as google.maps.StreetViewPanoramaData)
        .location as google.maps.StreetViewLocation;

      // console.log(this.navigator);
      const marker = new google.maps.Marker({
        position: location.latLng,
        map: this.navigator,
        title: location.description,
      });

      this.panorama.setPano(location.pano as string);
      this.panorama.setPov({
        heading: 270,
        pitch: 0,
      });
      this.panorama.setVisible(true);
    } else {
      console.error("Street View data not found for this location.");
    }
  }
}
