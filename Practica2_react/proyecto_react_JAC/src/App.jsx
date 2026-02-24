import { useState } from "react";
import NewProduct from "./components/NewProduct";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Ratón óptico 1",
      price: 15.5,
      date: new Date(2026, 2, 5)
    }
  ]);

  const addProductHandler = (product) => {
    setProducts((prev) => [product, ...prev]);
  };

  const changeTitleHandler = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, title: "¡¡Cambiado!!" } : p
      )
    );
  };

  return (
  <main className="container">
    <header className="header">
      <h1>LISTA DE PRODUCTOS</h1>
      <p>Descripción fecha y precio</p>
    </header>

    <NewProduct onAddProduct={addProductHandler} />
    <ProductList
      products={products}
      onChangeTitle={changeTitleHandler}
    />
  </main>
);
}

export default App;