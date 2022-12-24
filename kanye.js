const loadQuotes = () => {
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data => displayQuote(data));
}

const displayQuote = data => {
  console.log(data.quote);
  const quotelement = document.getElementById('quote');
  quotelement.innerText = data.quote;
}
