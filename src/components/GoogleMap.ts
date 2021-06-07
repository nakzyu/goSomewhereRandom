import "./googleMap.css";
import { $ } from "../utilities/dom";

export default function GoogleMap(): google.maps.Map {
  let map = <google.maps.Map>null;

  const init = (): void => {
    map = new google.maps.Map($("#nav"), {
      zoom: 8,
    });

    const panorama = new google.maps.StreetViewPanorama($("#pano"));
    map.setStreetView(panorama);
  };

  init();
  return map;
}
