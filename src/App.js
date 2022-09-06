import NavBar from "./components/NavBar";
import  "./app/styles.css";
import {ItemListContainer} from "./components/ItemListContainer";


const App =() => {
 
    return( 
    <div classname="app">
      <NavBar/>
      <ItemListContainer greetings={"Bienvenido"}/>
      </div>
    )
;}

export default App;
