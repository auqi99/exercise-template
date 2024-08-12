"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  // const register = async (payload: RegisterArgs) => {
  //   setIsLoading(true);
  //   try {
  //     await axiosInstance.post("/auth/register", {
  //       name: payload.name,
  //       email: payload.email,
  //       password: payload.password,
  //     });

  //     alert("Register Success");

  //     router.push("/login");
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       alert(error.response?.data || "Something went wrong");
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return useMutation({
    mutationFn: async (payload: RegisterPayload) => {
      const { data } = await axiosInstance.post("/auth/register", payload);
      return data;
    },
    onSuccess: (data) => {
      toast.success("Register success");
      router.push("/login");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useRegister;
