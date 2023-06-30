// Button Click Event
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button Clicked!");
});

// Modal Popup
const modal = document.getElementById("myModal");
const items = document.querySelectorAll(".item");
items.forEach(function (item) {
  item.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });
});

// Close Modal
modal.addEventListener("click", function () {
  modal.classList.add("hidden");
});
