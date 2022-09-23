import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contacto from '../pages/Contacto';
import Productos from '../pages/Productos';


const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Inicio/>} />
            <Route path="/page2/" element={<Contacto/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="/page3/" element={<Productos/> } />
        </Routes>
    </BrowserRouter>
);

export default Router;