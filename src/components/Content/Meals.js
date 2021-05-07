export default function Meals() {
    return (

        <ul class="options meal-options">
            <li class="feijoada" onclick="selectMeal('.feijoada', 'Feijoada', 32.9)">
                <img src="imagens/feijoada.jpg" alt="feijoada" class="main-img" />
                <div class="main">Feijoada</div>
                <div class="more">Acompanha arroz, farofa, couve e laranja</div>
                <div class="price"><span>R$ 32,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>

            <li class="lasanha" onclick="selectMeal('.lasanha', 'Lasanha', 39.9)">
                <img src="imagens/lasanha.jpg" alt="lasanha" class="main-img" />
                <div class="main">Lasanha a bolonhesa</div>
                <div class="more">Acompanha salada verde</div>
                <div class="price"><span>R$ 39,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>

            <li class="frango" onclick="selectMeal('.frango', 'Frango com Quiabo', 32.9)">
                <img src="imagens/frango.jpg" alt="frango com quiabo" class="main-img" />
                <div class="main">Frango com quiabo</div>
                <div class="more">Acompanha polenta cremosa e farofa</div>
                <div class="price"><span>R$ 32,90</span><ion-icon class="hide-icon" name="checkmark-circle"></ion-icon></div>
            </li>
        </ul>
    );
}