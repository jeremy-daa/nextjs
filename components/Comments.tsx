"use client";
import { formatDate } from "@/functions/func";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
type Comment = {
  id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  postSlug: string;
  user: User;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};
const Comments = ({ postSlug }: { postSlug: string }) => {
  const status = useSession().status === "authenticated" ? false : true;

  const { data, mutate, isLoading } = useSWR(
    `https://lambda-blog.vercel.app/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");
  const handleSubmit = async () => {
    const res = await fetch("https://lambda-blog.vercel.app/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc, postSlug }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    } else {
      setDesc("");
    }
    mutate();
  };
  return (
    <>
      <div className="w-full flex flex-col gap-7">
        <h1 className="font-bold text-2xl text-slate-500">Comments</h1>
        {!status ? (
          <div className="w-full flex gap-7 items-center md:flex-row flex-col">
            <textarea
              className="font-mono h-16 w-full p-5 rounded-sm text-slate-600"
              placeholder="Write a comment ..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button
              className="px-5 py-2 h-10 bg-red-800 rounded-sm flex justify-center items-center md:mr-3 text-white md:w-fit w-full mr-0"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        ) : (
          <>
            <Link
              href={"/login"}
              className="px-5 py-2 h-10 bg-red-800 rounded-sm flex justify-center items-center mr-3 text-white"
            >
              Login to Comment
            </Link>
          </>
        )}
        {isLoading
          ? "Coments are loading ..."
          : data?.map((comment: Comment, index: number) => {
              return (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="flex flex-start gap-4 justify-start items-center">
                    <div className="relative flex-1 h-[50px] max-w-[50px] rounded-full overflow-hidden">
                      <Image
                        src={comment.user.image || "/frog.jpg"}
                        alt=""
                        fill
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2 text-slate-500">
                      <h1 className="text-sm font-semibold">
                        {comment.user.name}
                      </h1>
                      <span className="text-xs">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                  </div>
                  <p className="w-full text-sm">
                    {comment.desc.substring(0, 200)}
                  </p>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Comments;
