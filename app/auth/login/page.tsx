"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password of min length 6 is required" }),
  rememberPassword: z.boolean(),
});

type SchemaType = z.infer<typeof formSchema>;

export default function LoginForm() {
  const form = useForm<SchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberPassword: false,
    },
  });

  function onSubmit(values: SchemaType) {
    // Handle login logic here
    console.log(values);
  }

  return (
    <div className="grid place-content-center min-h-screen relative isolate p-1">
      <Image
        src={"/images/login-bg.png"}
        alt=""
        fill
        sizes="1200px"
        className="object-center object-cover"
      />

      <div className="w-full z-20 max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Login to Account</h1>
          <p className="text-gray-500">
            Please enter your email and password to continue
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email address:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="esteban_schiller@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-gray-500 hover:text-blue-500"
                    >
                      Forget Password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rememberPassword"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Remember Password
                  </FormLabel>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Sign In
            </Button>

            <div className="text-center mt-4">
              <p className="text-gray-500">
                Don&apos;t have an account?{" "}
                <Link href="/" className="text-blue-500 hover:underline">
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
