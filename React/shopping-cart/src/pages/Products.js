import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export const Products = () => {
  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
