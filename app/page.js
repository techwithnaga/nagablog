import CardList from "./components/CardList";
import Menu from "./components/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main className="flex justify-center">
      {/* <Featured></Featured> */}
      {/* <CategoryList></CategoryList> */}
      <div className="flex gap-10 mt-10 justify-between pb-[100px] w-[70%]">
        <CardList page={page} />
        <Menu></Menu>
      </div>
    </main>
  );
}
