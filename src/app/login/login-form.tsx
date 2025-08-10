"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

import { signIn } from "next-auth/react";

import { useRouter } from "nextjs-toploader/app";
import { useState } from "react";
import { PasswordInput } from "@/components/password-input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { LoginSchema, LoginSchemaType } from "@/validations/schemas/auth";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    setLoading(true);

    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      form.setError("username", {
        type: "manual",
        message: "Username atau Password salah",
      });
      form.setError("password", {
        type: "manual",
        message: "Username atau Password salah",
      });
    } else {
      toast.success("Login Sukses", {
        description:
          "Selamat datang di Point Of Sale Admin Koperasi Hubdam. Akses Anda telah diverifikasi.",
      });

      router.push("/admin");
    }

    setLoading(false);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Selamat Datang</h1>
                  <p className="text-muted-foreground text-balance">
                    POINT OF SALE KOPERASI HUBDAM
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="user@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kata Sandi</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Kata Sandi Anda"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button
                    type="submit"
                    className="w-full mb-3"
                    disabled={loading}
                  >
                    {form.formState.isSubmitting ? "Loading..." : "Login"}
                  </Button>

                  <Button
                    type="button"
                    asChild
                    variant={"link"}
                    className="w-full"
                  >
                    <Link href={"/lupa-katasandi"}>Lupa Kata Sandi</Link>
                  </Button>
                </div>

                <h1 className="text-center text-muted-foreground text-xs">
                  Copyright @ PT SkytelIndo 2025
                </h1>
              </div>
            </form>
          </Form>
          <div className="bg-muted relative hidden md:flex items-center justify-center">
            <Image
              src="/logo-tni-ad.png"
              alt="Image"
              width={200}
              height={200}
              // className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
