import { MapMetadata } from "./Map";

export type Store = {
  map: google.maps.Map;
  streetViewSource: google.maps.StreetViewSource;
  streetViewService: google.maps.StreetViewService;
  meta: MapMetadata;
};
