// Range slider
let rangeAmount = document.querySelector(".range-amount")
let slider = document.querySelector(".slider")

slider.addEventListener("change", () => {
  rangeAmount.innerHTML = `R ${slider.value}`
})



// Products array
let products = [
  {name: 'MacBook Air 13 inch 2020', brand: 'Apple', price: 16999, image: 'https://media.takealot.com/covers_images/2b5fdb24d8a94a2f96d4ffeceb44806f/s-zoom.file', page: 'product.html'},
  {name: 'Acer Nitro 5', brand: 'Acer', price: 27599, image: 'https://media.takealot.com/covers_images/f78a019c3d70499aa24a44ebdc7984d9/s-zoom.file', page: 'product.html'},
  {name: 'Dell Inspiron 7400', brand: 'Dell', price: 29999, image: 'https://media.takealot.com/covers_images/ffc958690ed641e7967e34fed2bfc8a7/s-zoom.file', page: 'product.html'},
  {name: 'Lenovo Yoga 6 2020', brand: 'Lenovo', price: 18000, image: 'https://media.takealot.com/covers_images/5c264d84f7174a199c41708213a8157b/s-zoom.file', page: 'product.html'},
  {name: 'HP Notebook 255 G8', brand: 'HP', price:  5299, image: 'https://media.takealot.com/covers_images/94e49f8253ad43f2a264459625916f7a/s-zoom.file', page: 'product.html'},
]


// Get products div in catalogue page
let productsDiv = document.querySelector(".products")

for (let i = 0; i < products.length; i++) {
  productsDiv.innerHTML += `
    <div class="product-card product${i}">
      <img class="product-img" src="${products[i].image}" alt="product">
      <a href="${products[i].page}"><p class="p2">${products[i].name}</p></a>
      <p class="p3">${products[i].brand}</p>
      <h4 class="heading4">R ${products[i].price}</h4>
      <button class="btn atcBtn${i}" onclick="addToCart(products[i])"><i class="fas fa-cart-plus"></i> Add to cart</button>
    </div>
  `;
  let productCard = document.querySelector(`.product${i}`)
 
  productCard.addEventListener("click", () => {
    localStorage.setItem("productDetails", JSON.stringify(products[i]))
  })
}

for (let i = 0; i < products.length; i++) {
  let productCard = document.querySelector(`.product${i}`)
 
  productCard.addEventListener("click", () => {
    localStorage.setItem("productDetails", JSON.stringify(products[i]))
  })
}


// CART FUNCTIONS
if (!JSON.parse(localStorage.getItem("cart"))) {
  let cart = []
  localStorage.setItem('cart', JSON.stringify(cart))
}
const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  let newProduct = {...product}
  cart.push(newProduct)
  localStorage.setItem('cart', JSON.stringify(cart))
  productsInCart()
}

const productsInCart = () => {
  // Cart button products added
  let cartAmount = document.querySelector(".cart-amount")
  let productsInCart = JSON.parse(localStorage.getItem("cart")).length

  if (productsInCart > 0) {
    cartAmount.innerHTML = productsInCart
  }
}


for (let i = 0; i < products.length; i++) {
  let addToCartBtn = document.querySelector(`.atcBtn${i}`)
 
  addToCartBtn.addEventListener("click", () => {
    addToCart(products[i])
    addToCartBtn.setAttribute("disabled", true)
    addToCartBtn.innerHTML = "Added"
  })
}

function createProductDetailsPage() {
  let title = document.querySelector(".p-title")
  
  let productMain = document.querySelector(".product-main")

  let product = JSON.parse(localStorage.getItem("productDetails"))
  title.innerHTML = `${product.name}`
  productMain.innerHTML = `
    <div class="product-info">
    <img src="${product.image}" alt="product" class="img-product pd-img" />
    <div class="product-details">
      <h2 class="heading5 pd-name">${product.name}</h2>
      <br />
      <h3 class="heading3">Description: </h3>
      <p class="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti facilis eaque eos fuga sint molestias quia atque accusamus quod odit alias dolore labore dolorem, a placeat, beatae harum reprehenderit.</p>
      <br/>
      <h3 class="heading3">Specifications:</h3>
      <ul>
        <li class="p0">lorem ipsum</li>
        <li class="p0">lorem ipsum</li>
        <li class="p0">lorem ipsum</li>
        <li class="p0">lorem ipsum</li>
        <li class="p0">lorem ipsum</li>
      </ul>
    </div>
    </div>
    <div class="product-confirm">
    <h1 class="heading1 pd-price">R ${product.price}</h1>
    <a href="#"><button class="btn"><i class="fas fa-cart-plus"></i> Add to cart</button></a>
    </div>
`

  let btn = document.querySelector(".btn")
  btn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
  })

}

// Product results
let productResults = document.querySelector(".product-results")
productResults.innerHTML = `${products.length} results`


