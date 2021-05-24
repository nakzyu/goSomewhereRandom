import { MapMetadata } from "./Map";

export type Store = {
  map: google.maps.Map;
  streetViewService: google.maps.StreetViewService;
  meta: MapMetadata;
};
