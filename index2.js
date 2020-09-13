let btnPlus = document.getElementsByClassName("btn-plus");
let btnMoin = document.getElementsByClassName("btn-minus");
let hearts = document.getElementsByClassName("fa-heart");
let btnRemove = document.getElementsByClassName("btn-danger");

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function (e) {
    let parent = e.target.parentNode;
    let input = parent.getElementsByTagName("input")[0];
    input.value = parseInt(input.value) + 1;
    let item = parent.parentNode;
    let price = item.querySelector(".text-right");
    price = noCurrency(price.innerText);
    changeTotal(1, price, "+");
  });
}

for (let i = 0; i < btnMoin.length; i++) {
  btnMoin[i].addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    let input = parent.getElementsByTagName("input")[0];
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
      let item = parent.parentNode;
      let price = item.querySelector(".text-right");
      price = noCurrency(price.innerText);
      changeTotal(1, price, "-");
    }
  });
}

for (let heart of hearts) {
  heart.addEventListener("click", (e) => {
    e.target.style.color = e.target.style.color == "red" ? "" : "red";
  });
}

for (let remove of btnRemove) {
  remove.addEventListener("click", (e) => {
    let item = e.target.parentNode.parentNode;
    item.parentNode.removeChild(item);
    let price = item.querySelector(".text-right");
    price = noCurrency(price.innerText);
    let qty = parseInt(item.querySelector("input").value);
    changeTotal(qty, price, "-");
  });
}

function changeTotal(qty, price, type) {
  let total = document.getElementById("total");
  let priceTotal = noCurrency(total.innerText);
  if (type == "+") {
    total.innerText = (priceTotal + price * qty).toFixed(2);
  } else {
    total.innerText = (priceTotal - price * qty).toFixed(2);
  }
}

// function noCurrency(price) {
//   return parseFloat(price.split(" ")[0].replace(",", "."));
// }

const noCurrency = (price) => parseFloat(price.split(" ")[0].replace(",", "."));
