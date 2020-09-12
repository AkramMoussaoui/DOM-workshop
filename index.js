let btnPlus = document.getElementsByClassName("btn-plus");
let btnMoin = document.getElementsByClassName("btn-minus");
let btnRemove = document.getElementsByClassName("btn-danger");
let btnLike = document.getElementsByClassName("fa-heart");

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function (e) {
    let parent = e.target.parentNode;
    let input = parent.getElementsByTagName("input")[0];
    input.value = parseInt(input.value) + 1;
    updateTotal("plus", e, 1);
  });
}

for (let i = 0; i < btnMoin.length; i++) {
  btnMoin[i].addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    let input = parent.getElementsByTagName("input")[0];
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
      updateTotal("moin", e, 1);
    }
  });
}

for (let element of btnLike) {
  element.addEventListener("click", (e) => {
    e.target.style.color = e.target.style.color == "red" ? "" : "red";
  });
}

for (let element of btnRemove) {
  element.addEventListener("click", (e) => {
    let item = e.target.parentNode.parentNode;
    item.parentNode.removeChild(item);
    let input = item.getElementsByTagName("input")[0];
    updateTotal("remove", e, parseInt(input.value));
  });
}

function updateTotal(type, e, qty) {
  let total = document.getElementById("total");
  let price = e.target.parentNode.parentNode.querySelector(".text-right");
  let value = parseFloat(price.innerText.split(" ")[0].replace(",", "."));
  let totalValue = parseFloat(total.innerText.split(" ")[0].replace(",", "."));
  switch (type) {
    case "plus": {
      total.innerText =
        (
          Math.round((totalValue + value * qty + Number.EPSILON) * 100) / 100
        ).toFixed(2) + " €";
      break;
    }
    case "moin": {
      total.innerText =
        (
          Math.round((totalValue - value * qty + Number.EPSILON) * 100) / 100
        ).toFixed(2) + " €";
      break;
    }
    case "remove": {
      total.innerText =
        (
          Math.round((totalValue - value * qty + Number.EPSILON) * 100) / 100
        ).toFixed(2) + " €";
      break;
    }
  }
}
