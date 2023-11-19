import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Pagination from "@/components/Pagination";

export default function Home({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams.page) || 1;
  const category = searchParams.cat || "";
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="flex w-full gap-5 lg:flex-row flex-col">
        <CardList page={page} category={category} />
        <Menu />
      </div>
    </div>
  );
}
