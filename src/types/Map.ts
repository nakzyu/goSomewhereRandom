export type MapMetadata = {
  alpha2: string;
  /**
   * Corresponding name of alpha2
   */
  name: string;
  /**
   * [lng1, lat1, lng2, lat2]
   *
   * lng1, lat1 = upper left corner coords of country
   *
   * lng2, lat2 = bottom right corner coords of country
   */
  coordsBoundingBox: number[];
};
