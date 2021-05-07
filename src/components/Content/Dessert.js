export default function Dessert(props) {
    const { dessertOptions } = props;

    return (
        <ul class="options dessert-options">
            {
                dessertOptions.map(d => (
                    <li>
                        <img src={d.image} alt={d.name} class="main-img" />
                        <div class="main">{d.name}</div>
                        <div class="more">{d.description}</div>
                        <div class="price"><span>R$ {d.price}</span>
                            <div class="counter">
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