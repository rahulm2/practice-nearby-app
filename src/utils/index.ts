const MeterToMile = 0.000621371;

const geoDistance = (
  coordinates1: number[],
  coordinates2: number[]
): number => {
  const Radius = 6378137; // Earth’s mean radius in meter

  const [lng1, lat1] = coordinates1;
  const [lng2, lat2] = coordinates2;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = Radius * c;

  return Number((d * MeterToMile).toFixed(2));
};

export { geoDistance };
