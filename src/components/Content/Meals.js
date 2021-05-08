import React from "react";

export default function Meals(props) {
    const { mealOptions, selectMeal, setMeal} = props;

    const [counter, setCounter] = React.useState(1);


    function removeItem(event, i){
        event.stopPropagation();
        if (counter>0){
            mealOptions[i].amount -= 1;
            setCounter(mealOptions[i].amount) 
        } else if (counter===0){
            mealOptions[i].selected = false;
            setMeal([...mealOptions]);  
        }      
    }

    function addItem(event, i){
       event.stopPropagation();
        mealOptions[i].amount += 1;
        setCounter(mealOptions[i].amount) 
    }
   
    return (

        <ul class="options meal-options">
            {
                mealOptions.map((m,i) => (
                    <li class={m.selected ? "selected" : ""} onClick={() => selectMeal(i)}>
                        <img src={m.image} alt={m.name} class="main-img" />
                        <div class="main">{m.name}</div>
                        <div class="more">{m.description}</div>
                        <div class="price"><span>R$ {m.price}</span>
                            <div class={`counter ${m.selected ? "counterselected" : ""}`}>
                                <button class="minus" onClick={(event) =>removeItem(event, i)}>-</button>
                                <span>{mealOptions[i].amount}</span>
                                <button class="plus" onClick={(event) => addItem(event, i)}>+</button>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}