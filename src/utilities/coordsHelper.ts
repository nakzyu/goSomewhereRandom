import { COUNTRIES } from "./constants";
import { $ } from "./domHelper";
import { MapMetadata } from "../types/Map";
import { Store } from "../types/Store";

export const getRandomLatLng = (
  coordsBoundingBox: number[]
): google.maps.LatLngLiteral => ({
  lat: getRandomNumberBetweenRange(coordsBoundingBox[1], coordsBoundingBox[3]),
  lng: getRandomNumberBetweenRange(coordsBoundingBox[0], coordsBoundingBox[2]),
});

export const getNearestPanorama = (
  coords: google.maps.LatLngLiteral,
  svs: google.maps.StreetViewService,
  svp: google.maps.StreetViewPanorama,
  radius: number
): void =>
  svs.getPanoramaByLocation(coords, radius, (data) => {
    if (!data) {
      getNearestPanorama(coords, svs, svp, (radius *= 10));
      return;
    }
    svp.setPosition(data.location.latLng);
    updateCurLoc(data.location.description);
  });

export const setGoogleMapToRandomCoords = (
  mapMetaData: MapMetadata,
  store: Store
): void => {
  store.meta = mapMetaData;
  const latLng = getRandomLatLng(mapMetaData.coordsBoundingBox);
  store.map.setCenter(latLng);

  getNearestPanorama(
    latLng,
    store.streetViewService,
    store.map.getStreetView(),
    1
  );
};

export const getRandomMapMeta = (): MapMetadata =>
  COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];

const getRandomNumberBetweenRange = (from: number, to: number): number => {
  const difs = to - from;
  return from + difs * Math.random();
};

export const updateCurLoc = (description: string): void => {
  $(".search_bar_cur_location").innerText =
    description === "" ? "No Text" : description;
};
