// export const getGoogleMapsLink = (
//   coords: google.maps.LatLngLiteral,
//   zoom = 0
// ): string => {
//   return `https://maps.google.com/?q=${coords.lat},${coords.lng}&ll=${coords.lat},${coords.lng}&z=${zoom}`;
// };

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
  radius
): void => {
  svs.getPanoramaByLocation(coords, radius, (data) => {
    if (!data) {
      getNearestPanorama(coords, svs, svp, (radius *= 10));
      return;
    }
    svp.setPosition(data.location.latLng);
  });
};

const getRandomNumberBetweenRange = (from: number, to: number): number => {
  const difs = to - from;
  return from + difs * Math.random();
};
