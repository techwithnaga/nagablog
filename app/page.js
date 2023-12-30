import CardList from "./components/CardList";
import Menu from "./components/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main className=" ">
      {/* <Featured></Featured> */}
      {/* <CategoryList></CategoryList> */}
      <div className="flex gap-10 mt-10 justify-between pb-[270px]">
        <CardList page={page} />
        <Menu></Menu>
      </div>
    </main>
  );
}
