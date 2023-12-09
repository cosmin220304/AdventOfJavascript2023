import { hash } from "bcrypt";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { RegisterRequestSchema } from "@/schemas/requests";

export const usersRouter = createTRPCRouter({
  register: protectedProcedure
    .input(RegisterRequestSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.db.user.create({
        data: {
          ...input,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          password: (await hash(input.password, 10)) as string,
        },
      });
    }),
});
