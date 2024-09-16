import "./ProductCart.css";

function ProductCard({ product }) {
  const previousCart = JSON.parse(localStorage.getItem("cart"));
  let inCart = false;
  if (previousCart) {
    const searchProductInCart = previousCart.filter(
      (item) => item.id === product.id
    );
    console.log(searchProductInCart);
    inCart = searchProductInCart.length > 0;
    console.log(inCart);
  }

  const addToCart = () => {
    console.log(product);

    if (previousCart) {
      console.log("yea");
      previousCart.push(product);
      localStorage.setItem("cart", JSON.stringify(previousCart));
    } else {
      console.log("no");
      let products = [];
      products.push(product);
      localStorage.setItem("cart", JSON.stringify(products));
    }
    console.log(previousCart);
    //localStorage.removeItem("cart");
  };

  return (
    <div class="productCard">
      <img src="/assets/logo.png" alt={product.name} />
      <p class="name">{product.name}</p>
      <div class="action">
        <p>${product.price}</p>

        <button onClick={addToCart}>{inCart ? "Remove" : "Add To Cart"}</button>
      </div>
    </div>
  );
}

export default ProductCard;
