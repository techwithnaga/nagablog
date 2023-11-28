import CardList from "./components/CardList";
import Featured from "./components/Featured";
import CategoryList from "./components/CategoryList";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="">
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className="flex gap-10 mt-10">
        <CardList />
        <Menu></Menu>
      </div>
    </main>
  );
}
