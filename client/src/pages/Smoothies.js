import smoothieImage from "../assets/smoothie.png";

const Smoothies = () => {
    const smoothies = [
        {
            "name": "Banana Boost",
            "description": "Banana, Vanilla ice cream, Milk"
        },
        {
            "name": "Tropical Twist",
            "description": "Peach, Pinapple, Apple juice"
        },
        {
            "name": "Protein Packer",
            "description": "Oats, Peanut butter, Milk, Banana, Blueberries"
        },
    ]


    return (
        <ul class="recipes">
            {smoothies.map((smoothie) => {
                return (
                    <li class="recipe">
                        <img src={smoothieImage} alt="smoothie recipe icon"/>
                        <h4>{smoothie.name}</h4>
                        <p>{smoothie.description}</p>
                    </li>

                )
            })}
        </ul>
  )
}

export default Smoothies;