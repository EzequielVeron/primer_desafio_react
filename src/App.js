import NavBar from "./components/NavBar";
import  "./app/styles.css";
import {ItemListContainer} from "./components/ItemListContainer";
import ItemdetailContainer from "./components/ItemDetailContainer";


const App =() => {
 
    return( 
    <div classname="app">
      <NavBar/>
      <ItemListContainer greetings={"Bienvenido"}/>
      <ItemdetailContainer/>
      </div>
    )
;}

export default App;
