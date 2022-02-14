// Cart details

let cart = JSON.parse(localStorage.getItem("cart"))
let tableBody = document.querySelector(".table-body")
let table = document.querySelector("table")

for (let i = 0; i < cart.length; i++) {
  tableBody.innerHTML += `
    <tr>
      <td>
        <img class="table-img" src="${cart[i].image}" />
      </td>
      <td>${cart[i].name}</td>
      <td>R ${cart[i].price}</td>
    </tr>
  `
}

const calcTotals = () => {
  let subTotal = 0;
  let vat = 0;
  let total = 0;

  let tableSubTotal = document.querySelector(".table-subtotal");
  let tableVat = document.querySelector(".table-vat");
  let tableTotal = document.querySelector(".table-total");

  const cart = JSON.parse(localStorage.getItem("cart"))
  console.log(cart)

  cart.forEach(item => {
    subTotal += item.price;
  })


  vat = (subTotal * 0.14).toFixed(2);
  console.log(vat)

  total = Number(subTotal) + Number(vat);
  console.log(total)

  localStorage.setItem("total", total)


  tableSubTotal.innerHTML = `R ${subTotal.toFixed(2)}`
  tableVat.innerHTML = `R ${vat}`
  tableTotal.innerHTML = `R ${localStorage.getItem("total")}`
}

calcTotals()

// Discount section