let currentSlide = 0
const cards = document.querySelectorAll(".card")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")

function showSlide(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + cards.length) % cards.length
  showSlide(currentSlide)
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % cards.length
  showSlide(currentSlide)
}

// Initial display
showSlide(currentSlide)
