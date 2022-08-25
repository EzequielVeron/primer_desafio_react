import productos from "./data/personas.json";

const App =() => {
  return (
    <div className="App">
      <p>Chocolates</p>
      {
        productos.map(producto =>{
          <div><p>Marca: {producto.marca}</p>
            <p>Producto:{producto.producto}</p>
          </div>
        })
      }
    </div>
  );
}

export default App;
