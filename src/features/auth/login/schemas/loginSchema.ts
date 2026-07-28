import {z} from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^(\+98|98|0)?9\d{9}$/, "شماره موبایل معتبر نیست"),
  password: z.string().trim().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
