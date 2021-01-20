quotes = ['“Life is what happens when you’re busy making other plans.” — John Lennon',
'“The purpose of our lives is to be happy.” — Dalai Lama',
'“Get busy living or get busy dying.” — Stephen King'];

console.log(quotes[1]);


function randomQuote (){
    var random = Math.floor(Math.random() * quotes.length);
    var text = document.getElementById("quotes");
    text.textContent = quotes[random];
}

click = document.getElementById("button");
click.addEventListener("click",randomQuote);