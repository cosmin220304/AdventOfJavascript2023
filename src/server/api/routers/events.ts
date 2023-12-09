import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { CreateEventSchema } from "@/schemas/requests";

export const eventsRouter = createTRPCRouter({
  latest: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.event.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  create: protectedProcedure
    .input(CreateEventSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.db.event.create({
        data: { ...input, owner: ctx.session.user.id },
      });
    }),
});
