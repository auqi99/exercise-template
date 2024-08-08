"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "@/hooks/api/auth/useLogin";
import { useFormik } from "formik";
import { LoginSchema } from "./schemas/LoginSchema";
import Link from "next/link";

const LoginPage = () => {
  const { login, isLoading } = useLogin();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });
  return (
    <div>
      <main className="flex justify-center pt-20">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {!!formik.touched.email && !!formik.errors.email ? (
                    <p className="text-x5 text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <Link href={"/forgot-password"}>
                  <p className="text-right">Forgot password ?</p>
                </Link>
              </div>

              <Button className="mt-6 w-full" disabled={isLoading}>
                {isLoading ? "Loading..." : "Submit"}
              </Button>
              <Link href={"/register"}>
                  <p className="text-center">ga punya akun ya ? daftar sini aja</p>
                </Link>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LoginPage;
