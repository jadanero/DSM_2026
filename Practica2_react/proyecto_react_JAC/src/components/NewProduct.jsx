import { useState } from "react";

const NewProduct = ({ onAddProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const product = {
      id: Math.random(),
      title,
      price: +price,
      date: new Date(date)
    };

    onAddProduct(product);

    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        placeholder="Nombre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button>Añadir Producto</button>
    </form>
  );
};

export default NewProduct;