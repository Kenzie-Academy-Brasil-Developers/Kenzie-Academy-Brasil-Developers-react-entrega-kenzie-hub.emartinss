import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, "Insira seu email "),
    password: z.string().min(1, "Insira sua senha"),
  });