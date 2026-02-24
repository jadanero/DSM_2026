const ProductItem = ({ product, onChangeTitle }) => {
  const month = product.date.toLocaleString("es-ES", { month: "long" });
  const day = product.date.getDate();
  const year = product.date.getFullYear();

  return (
    <div className="product">
      <div className="date">
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>

      <h2>{product.title}</h2>

      <span className="price">{product.price} €</span>

      <button onClick={() => onChangeTitle(product.id)}>
        Cambia título
      </button>
    </div>
  );
};

export default ProductItem;