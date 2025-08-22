"use client";

import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
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

import { useRouter } from "nextjs-toploader/app";
import { useState } from "react";
import { PasswordInput } from "@/components/password-input";
import Link from "next/link";
import { createCustomer } from "./actions";
import { InputUserSchema, InputUserSchemaType } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { NotificationDialog } from "@/components/notification-dialog";

export default function RegisterPage() {
  const router = useRouter();

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const form = useForm<InputUserSchemaType>({
    resolver: yupResolver(InputUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "CUSTOMER",
      avatar: "uploads/avatar/default-avatar.jpg",
    },
  });

  const onSubmit = async (payload: InputUserSchemaType) => {
    setLoading(true);

    const action = await createCustomer(payload);

    if (action.success) {
      setIsSuccessOpen(true);
    } else {
      setIsErrorOpen(true);
    }

    setLoading(false);
  };

  return (
    <div className="w-full relative min-h-svh flex justify-center items-center bg-[url('/bg-login.png')] bg-center bg-cover">
      <NotificationDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Register Berhasil!"
        message="Silahkan Login."
        variant="success"
      />

      {/* Dialog Gagal */}
      <NotificationDialog
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
        title="Aksi Gagal!"
        message="Terjadi kesalahan saat register. Silakan coba lagi."
        variant="error"
      />

      <Image
        className="absolute left-5 top-5"
        src="/logo-tni-ad.png"
        alt="Image"
        width={40}
        height={40}
      />

      <Card className="md:w-lg relative">
        <CardContent className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Register</h1>
                  <p className="text-muted-foreground text-balance">
                    Mendaftar Ke Aplikasi
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Rahmat Permadi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
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
                    {form.formState.isSubmitting ? "Loading..." : "Submit"}
                  </Button>

                  <Button
                    type="button"
                    asChild
                    className="w-full"
                    disabled={loading}
                    variant={"link"}
                  >
                    <Link href={"/login"}>Kembali</Link>
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <h1 className="text-center -bottom-10 w-full absolute left-0 text-muted-foreground text-xs">
          Copyright @ PT SkytelIndo 2025
        </h1>
      </Card>
    </div>
  );
}
