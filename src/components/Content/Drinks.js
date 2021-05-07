export default function Drinks() {
    return (
        <ul class="options drink-options">
            <li class="coca" onclick="selectDrink('.coca', 'Coca-cola 350mL', 5.9)">
                <img src="imagens/coca.jpg" alt="coca-cola" class="main-img" />
                <div class="main">Coca-cola</div>
                <div class="more">Lata 350mL</div>
                <div class="price"><span>R$ 5,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>

            <li class="mate" onclick="selectDrink('.mate', 'Mate Leão 300mL', 4.9)">
                <img src="imagens/mate.jpg" alt="mate leão copo" class="main-img" />
                <div class="main">Mate Leão</div>
                <div class="more">Copo 300mL</div>
                <div class="price"><span>R$ 4,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>

            <li class="agua" onclick="selectDrink('.agua', 'h2o 500 mL', 6.9)">
                <img src="imagens/h20.jpg" alt="H2O" class="main-img" />
                <div class="main">H2O</div>
                <div class="more">Garrafa 500mL</div>
                <div class="price"><span>R$ 6,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>
        </ul>
    );
}