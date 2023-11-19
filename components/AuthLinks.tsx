"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { use, useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = useSession().status === "authenticated" ? false : true;

  return (
    <div className="flex gap-3 items-center">
      {status ? (
        <Link href={"/login"} className="md:block hidden">
          {" "}
          Login
        </Link>
      ) : (
        <>
          <Link href={"/write"} className="md:block hidden">
            {" "}
            Write
          </Link>
          <Link href={""} className="md:block hidden" onClick={() => signOut()}>
            {" "}
            Logout
          </Link>
        </>
      )}
      <div
        className="md:hidden items-center justify-center flex flex-col gap-1 ml-4 cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="rounded-sm h-[2px] w-7  bg-[var(--text)] block"></div>
        <div className="rounded-sm h-[2px] w-7  bg-[var(--text)] block"></div>
        <div className="rounded-sm h-[2px] w-7  bg-[var(--text)] block"></div>
      </div>
      <div
        className={`md:hidden flex bg-[var(--bg)] text-[var(--text)] fixed z-10 top-[50px] left-0 w-full h-[calc(100vh-50px)] flex-col items-center justify-center gap-10 text-2xl font-semibold duration-300 ${
          open ? "translate-x-0" : " -translate-x-[calc(100%+50px)]"
        }`}
      >
        <Link
          href={"/"}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Homepage
        </Link>
        <Link
          href={"/about"}
          onClick={() => {
            setOpen(!open);
          }}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Contact
        </Link>
        {status ? (
          <Link
            href={"/login"}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {" "}
            Login
          </Link>
        ) : (
          <>
            <Link
              href={"/signup"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              Write
            </Link>
            <Link
              href={"/signup"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {" "}
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthLinks;
