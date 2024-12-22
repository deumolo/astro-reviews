import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { prisma } from "../db/index";

export const getPlaces = defineAction({
  accept: "json",
  handler: async () => {
    try {
      const places = await prisma.place.findMany();
      return {
        status: true,
        places: places
      };
    } catch (error) {
      throw "Unexpected error getting places";
    }
  },
});
