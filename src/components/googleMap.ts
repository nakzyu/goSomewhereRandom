import "./googleMap.css";
import { $ } from "../utilities/domHelper";

export default function GoogleMap(): google.maps.Map {
  let map = <google.maps.Map>null;

  const init = (): void => {
    map = new google.maps.Map($("#nav"), {
      zoom: 8,
      mapTypeControl: false,
      streetViewControl: true,
    });

    const panorama = new google.maps.StreetViewPanorama($("#pano"), {
      addressControl: false,
    });

    map.setStreetView(panorama);
  };

  init();
  return map;
}
