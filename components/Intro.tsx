"use client";
import { useSession } from "next-auth/react";

const Intro = () => {
  const data = useSession().data;
  const user = data ? data.user : null;
  return (
    <h1 className="xl:text-6xl sm:text-5xl text-4xl lg:leading-[1.6] leading-[1.6] tracking-wide">
      <b className="font-extrabold">
        Hi {`${user ? user.name + "," : "Lambda Blogs Here!"}`}
      </b>{" "}
      Discover all the shenanigans to read about.
    </h1>
  );
};

export default Intro;
