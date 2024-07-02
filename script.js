let addBtn = document.querySelector("button");
let input = document.querySelector("input");
let data = document.querySelector(".data-content");
let delBtn = document.querySelector(".del-btn");

addBtn.addEventListener("click", () => {
  var paragraph = document.createElement("p");

  data.appendChild(paragraph);
  paragraph.classList.add("paragraph");
  paragraph.innerText = input.value;
  input.value = "";

  var i = document.createElement("i");
  delBtn.appendChild(i);
  i.classList.add("fa-solid", "fa-trash");

  i.addEventListener("click", () => {
    data.removeChild(paragraph);
    delBtn.removeChild(i);
  });
});
