"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Button} from "@/shared/components/common/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/common/card/card";
import {Input} from "@/shared/components/common/input/input";

import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/login/schemas/loginSchema";
import useAdminLogin from "../services/useLoginMutation";
import {setToken} from "@/shared/utils/token";

import {useRouter} from "next/navigation";

export function LoginForm() {
  const {mutate: login, isPending} = useAdminLogin();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    login(
      {
        query: values,
      },
      {
        onSuccess: (data) => {
          setToken(data.result.accessToken);
          router.push("/")
        },
      },
    );
  };

  return (
    <Card className="w-full max-w-md border border-border/70 bg-card shadow-sm">
      <CardHeader className="space-y-2 px-6 pb-4 pt-6">
        <CardTitle className="text-xl font-semibold text-foreground">
          ورود به حساب
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          از شماره موبایل و رمز عبور خود استفاده کنید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            type="tel"
            label="شماره موبایل"
            inputSize="md"
            placeholder="0912xxxxxxx"
            className="bg-background"
            error={errors.phone?.message}
            {...register("phone")}
          />

          <Input
            type="password"
            label="رمز عبور"
            inputSize="md"
            placeholder="رمز عبور خود را وارد کنید"
            className="bg-background"
            showPasswordToggle
            error={errors.password?.message}
            {...register("password")}
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="mt-2 w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90"
            isLoading={isPending}
          >
            ورود
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
