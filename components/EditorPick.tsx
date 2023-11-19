import React from "react";
import Image from "next/image";
import PopularCard from "./PopularCard";

const EditorPick = () => {
  return (
    <div className="flex gap-4 justify-start items-center">
      <div className="flex-[0.2]">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image src={"/blog_1.jpg"} alt="" fill />
        </div>
      </div>

      <div className="flex-[0.8]">
        <PopularCard
          color="orange"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          name="Travel"
        />
      </div>
    </div>
  );
};

export default EditorPick;
