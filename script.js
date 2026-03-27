const getQuote = document.getElementById("quote");
const getAuthor = document.getElementById("author");
const quoteBtn = document.getElementById("btn");

//adding functionality on generate quote btn
quoteBtn.addEventListener("click", async () => {
  getQuote.textContent = "Loading....";
  getAuthor.textContent = "";

  //added  Add try-catch block for API call
  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();

    getQuote.textContent = data.quote;
    quoteBtn.disabled = true;
    setTimeout(() => {
      getAuthor.textContent = `-${data.author}`;
      quoteBtn.disabled = false;
    }, 2000);
  } catch (error) {
    getQuote.textContent = "Failed to load a quote";
    getAuthor.textContent = "";
    quoteBtn.disabled = false;
  }
});
