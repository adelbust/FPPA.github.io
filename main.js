const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
    const fecha = card.querySelector(".fecha");
    fecha.classList.toggle("hidden");
  });
});
