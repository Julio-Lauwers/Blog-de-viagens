const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

function updateCarousel() {
  items.forEach((item, index) => {
    if (index === currentItem) {
      item.classList.add("current-item");
    } else {
      item.classList.remove("current-item");
    }
  });
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items[currentItem].scrollIntoView({
      
      block: "center"
    });

    updateCarousel(); // Atualiza as classes "current-item" nas imagens.
  });
});

// Inicializa o carrossel
updateCarousel();