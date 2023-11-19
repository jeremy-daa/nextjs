import Image from "next/image";
import Intro from "./Intro";
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
            <h1 className="text-2xl font-extrabold tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, est.
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              ab fugiat sed odit tempora voluptatum obcaecati ipsum dolore, in
              iste voluptas est commodi. Totam nostrum accusantium natus odit
              nulla deserunt modi explicabo architecto dolorum laudantium, fugit
              excepturi aliquam quaerat. Nisi!
            </p>
            <button className="px-5 py-3 w-fit hover:text-[var(--text)] hover:bg-[var(--bg)] bg-[var(--text)] text-[var(--bg)] rounded-md duration-300 border-[var(--text)] border-2 hover:border-solid">
              Read More.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
