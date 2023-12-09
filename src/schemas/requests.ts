import { z } from "zod";

export const RegisterRequestSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(8),
});
export type RegisterRequest = z.infer<typeof RegisterRequestSchema>;

export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export const CreateEventSchema = z.object({
  name: z.string().min(3),
  date: z.coerce.date(),
  sendReminder: z.boolean().optional().default(false),
});
export type CreateEvent = z.infer<typeof CreateEventSchema>;
