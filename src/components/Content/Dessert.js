import React from "react";

export default function Dessert(props) {
    const {dessert, selectDessert, setDessert } = props;

    const [counter, setCounter] = React.useState(1);


    function removeItem(event, i) {
        event.stopPropagation();
        if (counter > 0) {
            dessert[i].amount -= 1;
            setCounter(dessert[i].amount)
        } else if (counter === 0) {
            dessert[i].selected = false;
            setDessert([...dessert]);
        }
    }

    function addItem(event, i) {
        event.stopPropagation();
        dessert[i].amount += 1;
        setCounter(dessert[i].amount)
    }

    return (
        <ul class="options dessert-options">
            {
                dessert.map((d,i) => (
                    <li class={d.selected ? "selected" : ""} onClick={() => selectDessert(i)}>
                        <img src={d.image} alt={d.name} class="main-img" />
                        <div class="main">{d.name}</div>
                        <div class="more">{d.description}</div>
                        <div class="price"><span>R$ {d.price}</span>
                        <div class={`counter ${d.selected ? "counterselected" : ""}`}>
                                <button class="minus" onClick={(event) => removeItem(event, i)}>-</button>
                                <span>{dessert[i].amount}</span>
                                <button class="plus" onClick={(event) => addItem(event, i)}>+</button>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}