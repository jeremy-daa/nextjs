import Pagination from "./Pagination";
import prisma from "@/utils/connect";
import Card from "./Card";
import { getData } from "./CategoryList";

interface post {
  _id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userEmail: string;
  comments: any[];
}

const CardList = async ({
  page,
  category,
}: {
  page: number;
  category?: string;
}) => {
  const [posts, count] = await getData(`posts?page=${page}&cat=${category}`);
  const postsArr: post[] = posts;
  const posts_page = count;
  const post_per_page = 2;
  const total_pages = Math.ceil(posts_page / post_per_page);
  const hasNext = page < total_pages;
  const hasPrev = page > 1;

  return (
    <div className="py-7 flex-[0.7]">
      <div className="flex w-full justify-start items-start flex-col gap-8">
        <h1 className="text-xl font-bold">Recent Posts</h1>
        {postsArr &&
          postsArr.map((data: post, index: number) => (
            <Card
              key={index}
              img={data.img}
              slug={data.slug}
              title={data.title}
              category={data.catSlug}
              desc={data.desc}
              date={data.createdAt}
            />
          ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
