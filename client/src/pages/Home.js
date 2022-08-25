import smoothieImage from "../assets/smoothie.png";

const Home = () => {
  return (
    <header>
      <div class="smoothie">
        <img src={smoothieImage} alt=""/>
      </div>
      <div class="headings">
        <h2>Smoothie Recipes</h2>
        <h3>By Ninjas For Ninjas</h3>
        <a href="/smoothies" class="btn">View Recipes</a>
      </div>
    </header>
  )
}

export default Home;