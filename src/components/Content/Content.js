import React from "react";
import Footer from "../Footer";
import Dessert from "./Dessert"
import Drinks from "./Drinks"
import Meals from "./Meals"
import { dessertOptions, drinkOptions, mealOptions } from "./OptionsArrays";

export default function Content() {

    const [meal, setMeal] = React.useState(mealOptions);

    const [drink, setDrink] = React.useState(drinkOptions);

    const [dessert, setDessert] = React.useState(dessertOptions);


    function selectMeal(i) {

        if (meal[i].selected) {
            meal[i].selected = false;
            meal[i].amount = 0;
        } else {
            meal[i].selected = true;
            meal[i].amount = 1;
        }

        setMeal([...meal])
    }

    function selectDrink(i) {

        if (drink[i].selected) {
            drink[i].selected = false;
            drink[i].amount = 0;
        } else {
            drink[i].selected = true;
            drink[i].amount = 1;
        }

        setDrink([...drink])
    }

    function selectDessert(i) {

        if (dessert[i].selected) {
            dessert[i].selected = false;
            dessert[i].amount = 0;
        } else {
            dessert[i].selected = true;
            dessert[i].amount = 1;
        }

        setDessert([...dessert])
    }




    return (
        <>
            <div class="content">
                <h1>Primeiro, seu prato</h1>

                <Meals mealOptions={meal} selectMeal={selectMeal} setMeal={setMeal} />

                <h1>Agora, sua bebida</h1>

                <Drinks drink={drink} selectDrink={selectDrink} setDrink={setDrink} />

                <h1>Por fim, sua sobremesa</h1>

                <Dessert dessert={dessert} selectDessert={selectDessert} setDessert={setDessert} />
            </div>

            <Footer meal={meal} drink={drink} dessert={dessert} />

        </>
    );
}
