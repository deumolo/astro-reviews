import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { prisma } from "../db/index";

export const getPlaceById = defineAction({
  accept: "json",
  input: z.object({
    id: z.number(),
  }),
  handler: async ({ id }) => {
    try {
      const place = await prisma.place.findFirst({
        where: {
          id: {
            equals: id,
          },
        },
      });
      return {
        status: true,
        place: place,
      };
    } catch (error) {
      throw "Unexpected error getting places";
    }
  },
});
