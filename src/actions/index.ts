import { getPlaces } from "./get-places.action";
import { getPlaceById } from "./get-place-by-id";
import { getAvailabilityById } from "./get-availability-by-id.action";

export const server = {
  getPlaces,
  getPlaceById,
  getAvailabilityById
};
