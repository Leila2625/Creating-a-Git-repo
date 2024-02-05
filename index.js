index.js

const quotations = [
"Creativity is inventing, experimenting, growing, taking risks, breaking rules, making mistakes, and having fun. – Mary Lou Cook",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];

const randomIndex = Math.floor(Math.random() * quotations.length);
const selectedQuotation = quotations[randomIndex];

console.log(selectedQuotation);