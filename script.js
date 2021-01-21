quotes = ['“Life is what happens when you’re busy making other plans.” — John Lennon',
'“The purpose of our lives is to be happy.” — Dalai Lama',
'“Get busy living or get busy dying.” — Stephen King',
'“You only live once, but if you do it right, once is enough.” — Mae West',
'“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison',
'“If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein',
'“Never let the fear of striking out keep you from playing the game.”– Babe Ruth',
'“Money and success don’t change people; they merely amplify what is already there.” — Will Smith',



];

console.log(quotes[1]);


function randomQuote (){
    var random = Math.floor(Math.random() * quotes.length);
    var text = document.getElementById("quotes");
    text.textContent = quotes[random];
}

click = document.getElementById("button");
click.addEventListener("click",randomQuote);