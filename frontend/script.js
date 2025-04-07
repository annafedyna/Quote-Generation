let quoteText = document.querySelector("#quote"),
  quoteAuthor = document.querySelector("#author"),
  nextQuote = document.querySelector("#new-quote");

const QuoteAPIURL = "https://annafedyna-quote-server.hosting.codeyourfuture.io";

async function fetchQuote() {
  try {
    const response = await axios.get(QuoteAPIURL);
    quoteText.textContent = `${response.data.quote}`;
    quoteAuthor.textContent = `${response.data.author}`;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

nextQuote.addEventListener("click", () => {
  fetchQuote();
});

window.onload = fetchQuote;
