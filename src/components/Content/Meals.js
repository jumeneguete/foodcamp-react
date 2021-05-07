export default function Meals(props) {
    const { mealOptions, select} = props;


    return (

        <ul class="options meal-options">
            {
                mealOptions.map((m,i) => (
                    <li class={m.selected ? "selected" : ""} onClick={() => select(i)}>
                        <img src={m.image} alt={m.name} class="main-img" />
                        <div class="main">{m.name}</div>
                        <div class="more">{m.description}</div>
                        <div class="price"><span>R$ {m.price}</span>
                            <div class={`counter ${m.selected ? "counterselected" : ""}`}>
                                <button class="minus">-</button>
                                <span>0</span>
                                <button class="plus">+</button>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}