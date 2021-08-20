import Content from "./Content/Content"
import Header from "./Header"


export default function App(){

    return (
        <>
        <Header />

        <Content />
        

        <div class="confirmation-screen hide-confirmation">
            <div class="confirmation-box">
                <p class="bold">Confirme seu pedido</p>
                <div class="conf-itens conf-meal"><span>Frango</span> <span>4.90</span></div>
                <div class="conf-itens conf-drink"><span>Frango</span> <span>4.90</span></div>
                <div class="conf-itens conf-dessert"><span>Frango</span> <span>4.90</span></div>
                <div class="conf-itens bold conf-total"><span>TOTAL</span> <span>R$4.90</span></div>
            

                <button onclick="messageBonus()">Tudo certo, pode pedir!</button>
                <div onclick="back()" class="bold">Cancelar</div>
            </div>
        </div>
        </>
    );
}