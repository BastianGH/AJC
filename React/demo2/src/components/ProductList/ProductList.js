import { useState, useEffect, useCallback } from "react";
import "./ProductList.css";

const ProductList = () => {
  //const API = "http://localhost:3500/products";

  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [url, setUrl] = useState("http://localhost:3500/products");

  const fetchProducts = useCallback(async () => {
    const res = await fetch(url);
    const products = await res.json();
    setProducts(products);
  }, [url]);

  useEffect(() => {
    fetchProducts();
    console.log("a-");
  }, [fetchProducts]);
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((products) => {
  //       setProducts(products);
  //     });
  // }, [url]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        <button onClick={() => setUrl("http://localhost:3500/products")}>
          Tous les produits
        </button>
        <button
          onClick={() => setUrl("http://localhost:3500/products?in_stock=true")}
        >
          Produits disponibles
        </button>
      </div>
      {products.map((product) => (
        <div key={product.id} className="card">
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "En stock" : "Indisponible"}
            </span>
          </p>
          <p className="id">{product.id}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
