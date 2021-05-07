import React from "react";
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
                selected: false
            }, {
                image: "imagens/lasanha.jpg",
                name: "Lasanha a bolonhesa",
                description: "Acompanha salada verde",
                price: "39,90",
                selected: false
            }, {
                image: "imagens/frango.jpg",
                name: "Frango com quiabo",
                description: "Acompanha polenta cremosa e farofa",
                price: "32,90",
                selected: false
            }
        ]
    );

    const DrinkOptions = [
        {
            image: "imagens/coca.jpg",
            name: "Coca-cola",
            description: "Lata 350mL",
            price: "5,90",
            selected: false
        }, {
            image: "imagens/mate.jpg",
            name: "Mate Leão",
            description: "Copo 300mL",
            price: "4,90",
            selected: false
        }, {
            image: "imagens/h20.jpg",
            name: "H2O",
            description: "Garrafa 500mL",
            price: "6,90",
            selected: false
        }
    ];

    const DessertOptions = [
        {
            image: "imagens/pave.jpg",
            name: "Pavê de Bis",
            description: "Pote de 250mL",
            price: "8,90",
            selected: false
        }, {
            image: "imagens/torta.jpg",
            name: "Torta de Limão",
            description: "Uma fatia",
            price: "8,90",
            selected: false
        }, {
            image: "imagens/brigadeiro.jpg",
            name: "H2BrigadeiroO",
            description: "Uma unidade",
            price: "2,90",
            selected: false
        }
    ];

    function select(i){
        meal[i].selected ? meal[i].selected =false : meal[i].selected =true;
        setMeal([...meal])      
    }

    return (
        <>
            <h1>Primeiro, seu prato</h1>
 
            <Meals mealOptions={meal} select={select}/>

            <h1>Agora, sua bebida</h1>

            <Drinks drinkOptions={DrinkOptions} />

            <h1>Por fim, sua sobremesa</h1>

            <Dessert dessertOptions={DessertOptions} />
        </>
    );
}