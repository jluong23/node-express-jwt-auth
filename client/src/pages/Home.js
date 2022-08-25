import smoothieImage from "../assets/smoothie.png";

const Home = () => {
  return (
    <header>
      <div className="smoothie">
        <img src={smoothieImage} alt=""/>
      </div>
      <div className="headings">
        <h2>Smoothie Recipes</h2>
        <h3>By Ninjas For Ninjas</h3>
        <a href="/smoothies" className="btn">View Recipes</a>
      </div>
    </header>
  )
}

export default Home;