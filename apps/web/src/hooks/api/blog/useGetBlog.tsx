"use client";

import useAxios from "@/hooks/useAxios";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

const useGetBlog = (id: number) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Blog>(`/blogs/${id}`);

      return data;
    },
  });
};

export default useGetBlog;