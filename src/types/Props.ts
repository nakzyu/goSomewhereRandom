import MapService from "../services/MapService";

export default interface Props {
  $elem: HTMLElement;
  services: {
    mapService: MapService;
  };
}
