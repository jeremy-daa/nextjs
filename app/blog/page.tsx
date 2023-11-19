import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import React from "react";

const page = ({ searchParams }: { searchParams: any }) => {
  const cat = searchParams.cat || "";
  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
      <div className="rounded-md w-full h-10 text-xl font-bold bg-orange-400 flex justify-center items-center py-2 capitalize">
        {" "}
        {cat ? cat : "All Categories"}
      </div>
      <div className="flex w-full gap-5 lg:flex-row flex-col">
        <CardList page={page} category={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
