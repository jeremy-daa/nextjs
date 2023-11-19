import Image from "next/image";
import Intro from "./Intro";
import Link from "next/link";
const Featured = () => {
  return (
    <div>
      <div className="my-[30px] flex flex-col w-full gap-2 justify-center items-start">
        <Intro />
        <div className="mt-[20px] w-full flex justify-between items-center gap-10 flex-wrap md:flex-row flex-col">
          <div className="w-full min-h-[400px] rounded-md relative flex-1">
            <Image
              src="/blog_1.jpg"
              alt=""
              fill
              className="md:object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold tracking-wider uppercase">
              Lambda Blog
            </h1>
            {/* Features of this blog site:
              <ul>
                <li>Authentication using Auth.js</li>
                <li>OAuth using google&apos;s API</li>
                <li>Theme switcher</li>
                <li>DB using Mongo DB Atlas</li>
                <li>Server side rendering using Next.js 14</li>
                <li>Image storage using Firebase Firestore</li>
                <li>Prisma ORM</li>
                <li>API routes</li>
              </ul> */}
            <h2 className="text-xl">Features of this blog:</h2>
            <ul className="w-full flex justify-center gap-2 items-start p-2 text-sm flex-col">
              <li>&#9679; Authentication using Auth.js</li>
              <li>&#9679; OAuth using google&apos;s API</li>
              <li>&#9679; Theme switcher</li>
              <li>&#9679; DB using Mongo DB Atlas</li>
              <li>&#9679; Server side rendering using Next.js 14</li>
              <li>&#9679; Image storage using Firebase Firestore</li>
              <li>&#9679; Prisma ORM</li>
              <li>&#9679; API routes</li>
            </ul>
            <Link
              className="px-5 py-3 w-fit hover:text-[var(--text)] hover:bg-[var(--bg)] bg-[var(--text)] text-[var(--bg)] rounded-md duration-300 border-[var(--text)] border-2 hover:border-solid"
              href="https://github.com/jeremy-daa/nextjs.git"
            >
              Read More.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
