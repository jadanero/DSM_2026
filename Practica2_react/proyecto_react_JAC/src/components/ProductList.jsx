import ProductItem from "./ProductItem";

const ProductList = ({ products, onChangeTitle }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onChangeTitle={onChangeTitle}
        />
      ))}
    </div>
  );
};

export default ProductList;