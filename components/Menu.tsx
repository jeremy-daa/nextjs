import Link from "next/link";
import PopularCard from "./PopularCard";
import Image from "next/image";
import EditorPick from "./EditorPick";

const Menu = () => {
  return (
    <div className="flex-[0.3] py-7 flex flex-col gap-8">
      <div className="flex flex-col justify-start items-start gap-2">
        <span className="text-gray-500">What&apos;s hot</span>
        <h1 className="text-xl font-bold">Most Popular</h1>
      </div>
      <PopularCard
        color="orange"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        name="Travel"
      />
      <PopularCard
        color="yellow"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        name="Culture"
      />
      <PopularCard
        color="blue"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        name="Coding"
      />
      <PopularCard
        color="pink"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        name="Fashion"
      />
      <div className="flex flex-col justify-start items-start gap-2">
        <span className="text-gray-500">Discover by topic</span>
        <h1 className="text-xl font-bold">Categories</h1>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="categoryPill2 bg-blue-200 ">
          Style
        </Link>
        <Link href="/" className="categoryPill2 bg-pink-200 ">
          Fashion
        </Link>
        <Link href="/" className="categoryPill2 bg-green-200 ">
          Food
        </Link>
        <Link href="/" className="categoryPill2 bg-red-200 ">
          Travel
        </Link>
        <Link href="/" className="categoryPill2 bg-orange-200 ">
          Culture
        </Link>
        <Link href="/" className="categoryPill2 bg-purple-200 ">
          Coding
        </Link>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <span className="text-gray-500">Discovery by Topic</span>
        <h1 className="text-xl font-bold">Editors Pick</h1>
      </div>
      <EditorPick />
      <EditorPick />
      <EditorPick />
      <EditorPick />
    </div>
  );
};

export default Menu;
