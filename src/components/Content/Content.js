import Dessert from "./Dessert"
import Drinks from "./Drinks"
import Meals from "./Meals"

export default function Content() {
    return (
        <>
            <h1>Primeiro, seu prato</h1>
 
            <Meals />

            <h1>Agora, sua bebida</h1>

            <Drinks />

            <h1>Por fim, sua sobremesa</h1>

            <Dessert />
        </>
    );
}