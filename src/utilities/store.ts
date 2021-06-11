import { $ } from "./domHelper";
import { MapMetadata } from "../types/Map";
import { Store } from "../types/Store";

export const store: Store = {
  map: <google.maps.Map>null,
  streetViewService: <google.maps.StreetViewService>null,
  meta: <MapMetadata>null,
  streetViewSource: <google.maps.StreetViewSource>null,
};
