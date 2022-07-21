const btnCreate = document.querySelector(".btn-main");
const btnToggle = document.querySelector(".btn-toggle");
const taskList = document.querySelector(".list-container ul");

btnCreate.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  const input = document.querySelector(".input-main");
  let li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
});

btnToggle.addEventListener("click", () => {
  const listContainer = document.querySelector(".list-container");
  if (listContainer.style.display === "none") {
    btnToggle.textContent = "Hide List";
    listContainer.removeAttribute("style");
  } else {
    btnToggle.textContent = "Show List";
    listContainer.style.display = "none";
  }
});
