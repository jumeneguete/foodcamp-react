export default function Footer(props) {
    const { meal, drink, dessert, WhatsLink} = props;

    const selectedMeal = meal.find(meal => meal.amount > 0);
    const selectedDrink = drink.find(drink => drink.amount > 0);
    const selectedDessert = dessert.find(dessert => dessert.amount > 0);

    const condition = (selectedMeal && selectedDrink && selectedDessert);

    return (
        <footer>
            <button class={condition ? "active-button" : ""}>
                <a href={condition ? WhatsLink : "#"}>
                {condition ?
                    "Fechar Pedido"
                    : "Selecione os 3 itens\npara fechar o pedido" //como quebrar essa linha????????
                }
                </a>
            </button>
        </footer>
    );
}





