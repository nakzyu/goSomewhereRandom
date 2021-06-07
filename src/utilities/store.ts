import { MapMetadata } from "../types/Map";
import { Store } from "../types/Store";
import { $ } from "./dom";

export const store: Store = {
  map: <google.maps.Map>null,
  streetViewService: <google.maps.StreetViewService>null,
  meta: <MapMetadata>null,
  streetViewSource: <google.maps.StreetViewSource>null,
  updateCurLoc(description: string): void {
    $(".search_bar_cur_location").innerText = description;
  },
};
