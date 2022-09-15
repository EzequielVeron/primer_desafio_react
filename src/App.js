import NavBar from "./components/NavBar";
import  "./app/styles.css";
import {ItemListContainer} from "./components/ItemListContainer";
import ItemdetailContainer from "./components/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";


const App =() => {
 
    return( 
    <div classname="app">
      <NavBar/>
      <ItemListContainer greetings={"Bienvenido"}/>
      <ItemdetailContainer/>
      <ItemDetail/>
      </div>
    )
;}

export default App;
