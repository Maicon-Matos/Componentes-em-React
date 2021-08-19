import Item from "./componentes/index"
import Card from "./Card/index";

const App = () => {
    return(
        <>
            <h1>Meu primeiro React</h1>
            <ul>
                <Item texto="Item 1"/>
                <Item texto="Item 2"/>
                <Item texto="Item 3"/>
            </ul>
            <Card/>
        </>
    )
}

export default App;