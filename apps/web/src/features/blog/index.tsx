"use client";

import Markdown from "@/components/Markdown";
import { Badge } from "@/components/ui/badge";
import useGetBlog from "@/hooks/api/blog/useGetBlog";
import { format } from "date-fns";

import Image from "next/image";
import { notFound } from "next/navigation";
import React, { FC } from "react";

interface BlogDetailPageProps {
  blogId: number;
}

const BlogDetailPage: FC<BlogDetailPageProps> = ({ blogId }) => {
  //data emang bawaan dari react querynya
  const { data, isPending } = useGetBlog(blogId);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return notFound();
  }

  return (
    <main className="max-w-6cl container mx-auto px-4">
      <section className="space-y-2">
        <Badge>{data.category}</Badge>
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <p>
          {format(new Date(data.createdAt), "dd MMM yyyy")} - {data.user.name}
        </p>
        <div className="relative h-[400px]">
          <Image
            src={data.thumbnail}
            alt="thumbnail blog"
            className="object-cover"
            fill
          />
        </div>
        <Markdown content={data.content} />
      </section>
    </main>
  );
};

export default BlogDetailPage;