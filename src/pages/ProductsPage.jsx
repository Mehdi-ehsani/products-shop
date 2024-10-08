import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
	const [{ isLoading, data, error }, dispatchProducts] = useContext(ProductsContext);

  if(isLoading && !error) return <h1>loading...</h1>
  if(!isLoading && !error) {
    return (
      <div>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
      </div>
    );
  }
  if(!!error) return <h1>error</h1>
};

export default ProductsPage;
