import React from "react";

export default function Drinks(props) {
    const {drink, selectDrink, setDrink } = props;

    const [counter, setCounter] = React.useState(1);


    function removeItem(event, i) {
        event.stopPropagation();
        if (counter > 0) {
            drink[i].amount -= 1;
            setCounter(drink[i].amount)
        } else if (counter === 0) {
            drink[i].selected = false;
            setDrink([...drink]);
        }
    }

    function addItem(event, i) {
        event.stopPropagation();
        drink[i].amount += 1;
        setCounter(drink[i].amount)
    }

    return (
        <ul class="options drink-options">
            {
                drink.map((d,i) => (
                    <li class={d.selected ? "selected" : ""} onClick={() => selectDrink(i)}>
                        <img src={d.image} alt={d.name} class="main-img" />
                        <div class="main">{d.name}</div>
                        <div class="more">{d.description}</div>
                        <div class="price"><span>R$ {d.price}</span>
                            <div class={`counter ${d.selected ? "counterselected" : ""}`}>
                                <button class="minus" onClick={(event) => removeItem(event, i)}>-</button>
                                <span>{drink[i].amount}</span>
                                <button class="plus" onClick={(event) => addItem(event, i)}>+</button>
                            </div>
                        </div>
                    </li>
                ))
            }

        </ul>
    );
}