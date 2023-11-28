import NavBar from "@/components/navbar";

const Home = () => {
  return (
    <div>
      <h1> Home Chef Recipes</h1>
      <NavBar />
      <section className="list-Items">
        <li>Breakfast Burritos</li>
        <li>American Pancakes</li>
        <li>Overnight Oats</li>
        <li>Avocado Toast</li>
        <li>Shakshouka</li>
      </section>

      <h2>Add New Recipe</h2>
    </div>
  );
};
export default Home;
