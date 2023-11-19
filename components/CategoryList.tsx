import Image from "next/image";
import Link from "next/link";

interface category {
  id: string;
  slug: string;
  title: string;
  img: string;
  Posts: any[];
}
export const getData = async (endpoint: string) => {
  const res = await fetch(`https://lambda-blog.vercel.app/api/${endpoint}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
};

const CategoryList = async () => {
  const data: category[] = await getData("categories");
  const colors = [
    "bg-blue-200",
    "bg-pink-200",
    "bg-green-200",
    "bg-red-200",
    "bg-orange-200",
    "bg-purple-200",
  ];

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-start">
      <h1 className="text-xl font-bold">Popular Categories</h1>
      <div className="w-full flex md:gap-10 gap-5 xl:gap-2 justify-between items-center flex-wrap">
        {data &&
          data.map((data, index) => (
            <Link
              key={index}
              href={`/?cat=${data.slug}`}
              className={`categoryPill ${colors[index]}`}
            >
              <div className="w-8 h-8 flex justify-center items-center rounded-full overflow-hidden relative">
                {data.img && (
                  <Image src={data.img} alt="" fill className="object-cover" />
                )}
              </div>
              <h1 className="text-sm text-black">{data.title}</h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
