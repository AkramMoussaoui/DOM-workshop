const plus = document.getElementsByClassName("btn-plus");
const minus = document.getElementsByClassName("btn-minus");
const hearts = document.getElementsByClassName("fa-heart");
const total = document.getElementById("total");
const remove = document.getElementsByClassName("btn-danger");

//Plus Buttons
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", (e) => {
    const parent = e.target.parentNode;
    const price = parent.parentNode
      .querySelector(".text-right")
      .innerText.split(" ")[0]
      .replace(",", ".");
    const input = parent.getElementsByTagName("input")[0];
    input.value = parseInt(input.value) + 1;
    total.innerText = (
      Math.round(
        (parseFloat(total.innerText.replace(",", ".")) +
          parseFloat(price) +
          Number.EPSILON) *
          100
      ) / 100
    ).toFixed(2);
  });
}

//Minus Buttons
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", (e) => {
    const parent = e.target.parentNode;
    const input = parent.getElementsByTagName("input")[0];
    if (input.value > 0) {
      const price = parent.parentNode
        .querySelector(".text-right")
        .innerText.split(" ")[0]
        .replace(",", ".");
      input.value = parseInt(input.value) - 1;
      total.innerText = (
        Math.round(
          (parseFloat(total.innerText.replace(",", ".")) -
            parseFloat(price) +
            Number.EPSILON) *
            100
        ) / 100
      ).toFixed(2);
    }
  });
}

//Remove Buttons
for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", (e) => {
    const item = e.target.parentNode.parentNode;
    const price = item
      .querySelector(".text-right")
      .innerText.split(" ")[0]
      .replace(",", ".");
    const input = item.getElementsByTagName("input")[0];
    total.innerText = (
      Math.round(
        (parseFloat(total.innerText.replace(",", ".")) -
          parseFloat(price) * parseInt(input.value) +
          Number.EPSILON) *
          100
      ) / 100
    ).toFixed(2);
    item.parentNode.removeChild(item);
  });
}

//Heart Icons
for (let heart of hearts) {
  heart.addEventListener("click", (e) => {
    e.target.style.color = e.target.style.color == "red" ? "" : "red";
  });
}
