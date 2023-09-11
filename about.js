document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card")
  let currentCard = 0

  function showCard(index) {
    cards.forEach((card) => card.classList.remove("active"))
    cards[index].classList.add("active")
  }

  function nextCard() {
    currentCard = (currentCard + 1) % cards.length
    showCard(currentCard)
  }

  setInterval(nextCard, 3000) // Change card every 3 seconds
})
