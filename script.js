const quotes =  ['“Practice makes perfect.” ', '"I have a dream."', '“If you can dream it, you can do it.”', '“Trust yourself that you can do it and get it.”', '“The secret of getting ahead is getting started.”'];
const quotesAuthor = ['– Vince Lombardi.', '- Martin Luther King Jr.', '- Walt Disney.', '- Baz Luhrmann.', '- Mark Twain'];
let number = 0;
function newQuote() {
    let quote = document.getElementById('quote');
    let quoteAuthor = document.getElementById('quoteAuthor');
    number += 1;
    quote.innerHTML = quotes[number - 1];
    quoteAuthor.innerHTML = quotesAuthor[number - 1];
    if (quote.innerHTML == "undefined" && quoteAuthor.innerHTML == "undefined") {
        number = 1;
        quote.innerHTML = quotes[number - 1];
        quoteAuthor.innerHTML = quotesAuthor[number - 1];
    }
}