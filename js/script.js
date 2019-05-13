//JavaScript Random Quote Generator

// create quotes array
var quotes = [
  {
    quote: "All that we are is the result of what we have thought.",
    source: "Buddha"
  },
  {
    quote: "I have no special talent. I am only passionately curious.", 
    source: "Albert Einstein",
    year: 1952,
    citation: "Albert Einstein by Carl Seelig"
  },
  {
    quote: "If you judge people, you have no time to love them.",
    source: "Mother Teresa"
  },
  {
    quote: "Wisely, and slow. They stumble that run fast.",
    source: "William Shakespeare",
    year: 1595,
    citation: "Romeo and Juliet"
  },
  {
    quote: "The most courageous act is still to think for yourself. Aloud.",
    source: "Coco Chanel"
  },
  {
    quote: "Stay hungry, stay foolish.",
    source: "Steve Jobs",
    year: 2005
  },
  {
    quote: "A great man is always willing to be little.",
    source: "Ralph Waldo Emerson"
  },
  {
    quote: "The greatest wealth is to live content with little.",
    source: "Plato"
  },
  {
    quote: "The future belongs to those who prepare for it today.",
    source: "Malcom X"
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    source: "Bruce Lee"
  }
];

console.log(quotes);

// get a random quote

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length + 1);
  return quotes[randomNumber];
}

console.log(getRandomQuote());

//print quote to HTML

//generate random numbers for rgb values
  
function printQuote() {
  var randomQuote = getRandomQuote();
  var html = "";
  var red = Math.floor(Math.random() * 255 + 1);
  var green = Math.floor(Math.random() * 255 + 1);
  var blue = Math.floor(Math.random() * 255 + 1);

//add random quote, source, citation and year to html

  html +=  "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;
  if(randomQuote.citation && randomQuote.year) {
    html += "<span class='citation'>" + randomQuote.citation + "</span>" + "<span class='year'>" + randomQuote.year + "</span></p>";
  } else if (!randomQuote.citation && randomQuote.year) {
    html += "<span class='year'>" + randomQuote.year + "</span></p>"
  } else if (!randomQuote.year && randomQuote.citation) {
    html += "<span class='citation'>" + randomQuote.citation + "</span></p>"
  } else {
    html += "</p>"
  }
  
  //insert quote and associated information into the DOM
  document.getElementById('quote-box').innerHTML = html;

  //generate color using random rgb values created previously
  document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  }

//button functionality

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//automatic change

  setInterval(printQuote, 5000);