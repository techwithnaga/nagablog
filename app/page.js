import CardList from "./components/CardList";
import Featured from "./components/Featured";
import CategoryList from "./components/CategoryList";
import Menu from "./components/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main className="">
      <Featured></Featured>
      {/* <CategoryList></CategoryList> */}
      <div className="flex gap-10 mt-10">
        <CardList page={page} />
        <Menu></Menu>
      </div>
    </main>
  );
}
