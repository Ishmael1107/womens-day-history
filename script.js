const quotes = [
  "You strike a woman, you strike a rock. – 1956 Women's March Slogan",
  "Well-behaved women seldom make history. – Laurel Thatcher Ulrich",
  "Each time a woman stands up for herself, she stands up for all women. – Maya Angelou",
  "The future is female.",
  "When women support each other, incredible things happen."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").textContent = quotes[randomIndex];
}
