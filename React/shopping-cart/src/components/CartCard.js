import "./CartCard.css";

function CartCard() {
  return (
    <div class="cartCard">
      <img src="/assets/images/1004.png" alt="Logitech H111 Wired" />
      <p class="productName">Logitech H111 Wired</p>
      <p class="productPrice">$39</p>
      <button>Remove</button>
    </div>
  );
}

export default CartCard;
