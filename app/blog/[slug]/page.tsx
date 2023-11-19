import { getData } from "@/components/CategoryList";
import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import { formatDate } from "@/functions/func";
import { User } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
type Params = {
  params: {
    slug: string;
  };
};
type Post = {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: string;
  catSlug: string;
  userEmail: string;
  user: User;
};
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post: Post = await getData("posts/" + params.slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

const page = async ({ params: { slug } }: Params) => {
  const post: Post = await getData("posts/" + slug);

  return (
    <div className="w-full">
      <div className="w-full flex gap-10 py-7 justify-center items-stretch lg:flex-row flex-col">
        <div className="flex flex-col gap-5 flex-1 justify-between">
          <h1 className="text-5xl leading-[1.3] font-bold">
            {post && post.title}
          </h1>
          <div className="flex flex-start gap-4 justify-start items-center">
            <div className="relative flex-1 h-[50px] max-w-[50px] rounded-full overflow-hidden">
              <Image src={post.user.image || "/blog_1.jpg"} alt="" fill />
            </div>
            <div className="flex flex-col justify-center items-start gap-2 text-slate-500">
              <h1 className="text-sm font-semibold">{post.userEmail}</h1>
              <span className="text-xs">{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
        <div className="relative flex-1 min-h-[300px] rounded-md overflow-hidden">
          <Image src={post.img || "/blog_1.jpg"} alt="" fill />
        </div>
      </div>
      <div className=" flex w-full gap-5 lg:flex-row flex-col items-start">
        <div className="py-[30px] flex-[0.7] flex flex-col gap-7 items-start justify-center">
          <div
            className="w-full flex flex-col gap-4"
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          ></div>
          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
