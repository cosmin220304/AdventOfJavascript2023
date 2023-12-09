import { hash } from "bcrypt";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { RegisterRequestSchema } from "@/schemas/requests";

export const usersRouter = createTRPCRouter({
  register: publicProcedure
    .input(RegisterRequestSchema)
    .mutation(async ({ input, ctx }) => {
      if (await ctx.db.user.findUnique({ where: { email: input.email } })) {
        throw new Error("Email already exists");
      }
      return ctx.db.user.create({
        data: {
          ...input,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          password: (await hash(input.password, 10)) as string,
        },
      });
    }),
});
