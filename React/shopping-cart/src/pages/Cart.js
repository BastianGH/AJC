import ProductCard from "../components/ProductCard";
import CartCard from "../components/CartCard";

export const Cart = () => {
  return (
    <section className="cart">
      <h1>Cart Items: 2 / $188</h1>
      <CartCard />
    </section>
  );
};
