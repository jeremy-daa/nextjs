import Link from "next/link";
import Image from "next/image";
import React from "react";
interface props {
  img: string;
  title: string;
  desc: string;
  date: string;
  category: string;
  slug: string;
}
const removeHtmlTags = (str: string) => {
  return str.replace(/<[^>]*>?/gm, "");
};
const Card = ({ img, title, desc, date, category, slug }: props) => {
  function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based
    const year = date.getUTCFullYear();

    // Padding single-digit day or month with leading zero
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
  }
  return (
    <div className="w-full gap-8 flex justify-between md:flex-row flex-col items-stretch">
      <div className="w-full min-h-[250px] rounded-md relative flex-1">
        <Image
          src={img ? img : "/blog_1.jpg"}
          alt=""
          fill
          className="md:object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between items-start flex-col flex-1">
        <h1 className="text-sm tracking-wider text-gray-500">
          {date ? `${formatDate(date)} - ` : "01.01.2000 -"}
          <span className="uppercase text-red-800">{category}</span>
        </h1>
        <Link className="text-lg font-semibold" href={`/blog/${slug}`}>
          {title ? title : "Lorem ipsum dolor sit amet."}
        </Link>
        <div className="text-sm">
          {desc
            ? desc.length > 300
              ? removeHtmlTags(desc.slice(0, 300)) + "..."
              : removeHtmlTags(desc)
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."}
        </div>
        <Link
          href={`/blog/${slug}`}
          className="text-sm border-b-2 border-solid border-red-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
