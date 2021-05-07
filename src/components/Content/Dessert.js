export default function Dessert() {
    return (
        <ul class="options dessert-options">
            <li class="pave" onclick="selectDessert('.pave', 'Pavê de Bis', 8.9)">
                <img src="imagens/pave.jpg" alt="pavê de bis" class="main-img" />
                <div class="main">Pavê de Bis</div>
                <div class="more">Pote de 250mL</div>
                <div class="price"><span>R$ 8,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>

            <li class="torta" onclick="selectDessert('.torta', 'Torta de Limão', 8.9)">
                <img src="imagens/torta.jpg" alt="fatia de torta de limão" class="main-img" />
                <div class="main">Torta de Limão</div>
                <div class="more">Uma fatia</div>
                <div class="price"><span>R$ 8,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>

            <li class="brigadeiro" onclick="selectDessert('.brigadeiro', 'Brigadeiro', 2.9)">
                <img src="imagens/brigadeiro.jpg" alt="brigadeiro" class="main-img" />
                <div class="main">Brigadeiro</div>
                <div class="more">Uma unidade</div>
                <div class="price"><span>R$ 2,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>
        </ul>
    );
}