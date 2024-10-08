"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { RegisterSchema } from "./schemas/RegisterSchema";
import useRegister from "@/hooks/api/auth/useRegister";
import Link from "next/link";

const RegisterPage = () => {
  const { mutateAsync: register, isPending } = useRegister();
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await register(values);
    },
  });

  return (
    <main className="flex justify-center pt-20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.name && !!formik.errors.name ? (
                  <p className="text-xs text-red-500"> {formik.errors.name}</p>
                ) : null}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.email && !!formik.errors.email ? (
                  <p className="text-xs text-red-500"> {formik.errors.email}</p>
                ) : null}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.password && !!formik.errors.password ? (
                  <p className="text-xs text-red-500">
                    {" "}
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
            </div>
            <Button className="mt-6 w-full" disabled={isPending}>
              {isPending ? "loading..." : "Submit"}
            </Button>
            <Link href={"/login"}>
                  <p className="text-center">ga punya akun ya ?</p>
                </Link>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default RegisterPage;
