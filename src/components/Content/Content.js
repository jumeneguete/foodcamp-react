import React from "react";
import Footer from "../Footer";
import Dessert from "./Dessert"
import Drinks from "./Drinks"
import Meals from "./Meals"

export default function Content() {

    const [meal, setMeal] = React.useState(
        [
            {
                image: "imagens/feijoada.jpg",
                name: "Feijoada",
                description: "Acompanha arroz, farofa, couve e laranja",
                price: "32,90",
                selected: false,
                amount: 0
            }, {
                image: "imagens/lasanha.jpg",
                name: "Lasanha a bolonhesa",
                description: "Acompanha salada verde",
                price: "39,90",
                selected: false,
                amount: 0
            }, {
                image: "imagens/frango.jpg",
                name: "Frango com quiabo",
                description: "Acompanha polenta cremosa e farofa",
                price: "32,90",
                selected: false,
                amount: 0
            }
        ]
    );

    const [drink, setDrink] = React.useState(
        [
            {
                image: "imagens/coca.jpg",
                name: "Coca-cola",
                description: "Lata 350mL",
                price: "5,90",
                selected: false,
                amount: 0
            }, {
                image: "imagens/mate.jpg",
                name: "Mate Leão",
                description: "Copo 300mL",
                price: "4,90",
                selected: false,
                amount: 0
            }, {
                image: "imagens/h20.jpg",
                name: "H2O",
                description: "Garrafa 500mL",
                price: "6,90",
                selected: false,
                amount: 0
            }
        ]
    );


    const [dessert, setDessert] = React.useState(
        [
            {
                image: "imagens/pave.jpg",
                name: "Pavê de Bis",
                description: "Pote de 250mL",
                price: "8,90",
                selected: false,
                amount: 0
            }, {
                image: "imagens/torta.jpg",
                name: "Torta de Limão",
                description: "Uma fatia",
                price: "8,90",
                selected: false,
                amount: 0
            }, {
                image: "imagens/brigadeiro.jpg",
                name: "H2BrigadeiroO",
                description: "Uma unidade",
                price: "2,90",
                selected: false,
                amount: 0
            }
        ]
    );


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