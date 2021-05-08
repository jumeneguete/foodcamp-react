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
            meal[i].amount += 1;
        }

        setMeal([...meal]);
        totalOrdered();
    }

    function selectDrink(i) {

        if (drink[i].selected) {
            drink[i].selected = false;
            drink[i].amount = 0;
        } else {
            drink[i].selected = true;
            drink[i].amount += 1;
        }

        setDrink([...drink]);
        totalOrdered();
    }

    function selectDessert(i) {

        if (dessert[i].selected) {
            dessert[i].selected = false;
            dessert[i].amount = 0;
        } else {
            dessert[i].selected = true;
            dessert[i].amount += 1;
        }

        setDessert([...dessert]);
        totalOrdered();
    }

    function totalOrdered(){
        const selectedMeal = meal.filter(x => x.amount !== 0 && x.selected === true);
        const selectedDrink = drink.filter(x => x.amount !== 0 && x.selected === true);
        const selectedDessert = dessert.filter(x => x.amount !== 0 && x.selected === true);
    
        let mealTotal = 0;
        let drinkTotal = 0;
        let dessertTotal = 0;
    
        const MealPrice = selectedMeal.map(x => parseFloat(x.price.replace(",",".")) * x.amount);
        MealPrice.forEach(x => mealTotal += x);
    
        const drinkPrice = selectedDrink.map(x => parseFloat(x.price.replace(",",".")) * x.amount);
        drinkPrice.forEach(x => drinkTotal += x);
    
        const dessertPrice = selectedDessert.map(x => parseFloat(x.price.replace(",",".")) * x.amount);
        dessertPrice.forEach(x => dessertTotal += x);
    
        const total = (mealTotal + drinkTotal + dessertTotal);
           
        message(total);
        return total;
        
    }

    function message(total){
        let mealString = "";
        let mealRequest =meal.filter(x => x.amount !== 0).map(x => (
            `${x.name} - ${x.amount}x\n`
            ));
        mealRequest.forEach(x => mealString +=x);
    
        let drinkString = "";
        let drinkRequest =drink.filter(x => x.amount !== 0).map(x => (
            `${x.name} - ${x.amount}x\n`
            ));
        drinkRequest.forEach(x => drinkString +=x);
    
        let dessertString = "";
        let dessertRequest =dessert.filter(x => x.amount !== 0).map(x => (
            `${x.name} - ${x.amount}x\n`
            ));
        dessertRequest.forEach(x => dessertString +=x);
        
    
        let finalMessage = `Olá, gostaria de fazer o pedido: 
        \n\ - Prato:\n${mealString}
        \n\ - Bebida:\n${drinkString}
        \n\ - Sobremesa:\n${dessertString} 
        \n\Total: R$ ${total.toFixed(2).replace(".",",")}`;
        finalMessage = encodeURIComponent(finalMessage);
        let whatsappLink = "'https://wa.me/5521999989398?text="+ finalMessage + "'";
        
        return (whatsappLink);
    }

    const WhatsLink = message(totalOrdered()); 
   
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

            <Footer meal={meal} drink={drink} dessert={dessert} WhatsLink={WhatsLink}/>

        </>
    );
}
