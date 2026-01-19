
document.addEventListener("DOMContentLoaded", ()=> {
  // grab all input
  const productList = document.getElementById("product-list");
  const cartItemList = document.getElementById("cart-item-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  //products
  const products = [
    { id: 1, name: "Product 1", price: 29.109, taked: false },
    { id: 2, name: "Product 2", price: 89.99, taked: false },
    { id: 3, name: "Product 3", price: 39.6909, taked: false },
  ];

  // your cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  //display
  cart.forEach((item) => {
    renderCart(item);
  });

  products.forEach((product) => {
    const productDiv = document.createElement("div");

    productDiv.classList.add("product");

    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id = "${product.id}">Add to Cart</button`;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (event) => {
    // bubbling -> jab humproductList ke  kahin bhi click kr rhe hai tb event occur ho ja rha hai ise bubbling khte hai isko handle krna hoga -> "event-jab target ho-tagname ke button pe tb hi event occur ho"
    if (event.target.tagName === "BUTTON") {
      // console.log("clicked");

      // i want to add product in cart
      const productId = parseInt(event.target.getAttribute("data-id")); // getAttribute -> string return krta hai
      const product = products.find((p) => p.id === productId);
      // console.log(product);
      addToCart(product);
    }
  });

  function addToCart(product) {
    product.taked = !product.taked;
    cart.push({ ...product });

    saveitems();
    renderCart();
  }

  function renderCart() {
    cartItemList.innerHTML = "";
    let totalPrice = 0;

    if (cart.length === 0) {
      emptyCartMessage.classList.remove("hidden");
      cartTotalMessage.classList.add("hidden");
      totalPriceDisplay.textContent = "0.00";
      return;
    }

    emptyCartMessage.classList.add("hidden");
    cartTotalMessage.classList.remove("hidden");

    cart.forEach((item, index) => {
      totalPrice += item.price;

      const li = document.createElement("li");
      if (item.taked) li.classList.add("taked");

      li.innerHTML = `
        <span class="cart-text">${item.name} - $${item.price.toFixed(2)}</span>
        <button class="remove-btn">Remove</button>
      `;

      // toggle
      li.querySelector(".cart-text").addEventListener("click", () => {
        item.taked = !item.taked;
        li.classList.toggle("taked");
        saveitems();
      });

      // delete SINGLE item
      li.querySelector(".remove-btn").addEventListener("click", () => {
        cart.splice(index, 1); // remove ONLY ONE ITEM
        saveitems();
        renderCart();
      });

      cartItemList.appendChild(li);
    });

    totalPriceDisplay.textContent = totalPrice.toFixed(2);
  }



  checkOutBtn.addEventListener("click", () => {
    cart.length = 0; // make empty cart

    alert("checkout successfully");
    renderCart();
    saveitems();
  });

  function saveitems() {
    // take 2 -> parameter key, value(should be string)
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});

