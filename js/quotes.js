const quotes = [
    {
        quotes: "You can be confident and secure and know that you do a good job at what you do. But you don't want to be arrogant about it.",
        author: "Ruben Studdard"
    },
    {
        quotes: "Attempt easy tasks as if they were difficult, and difficult as if they were easy; in the one case that confidence may not fall asleep, in the other that it may not be dismayed.",
        author: "Baltasar Gracian"
    },
    {
        quotes: "Men of genius do not excel in any profession because they labor in it, but they labor in it because they excel.",
        author: "William Hazlitt"
    },
    {
        quotes: "The way to procure insults is to submit to them: a man meets with no more respect than he exacts.",
        author: "William Hazlitt"
    },
    {
        quotes: "Self-respect is the cornerstone of all virtue.",
        author: "John Herschel"
    },
    {
        quotes: "Martyrdom... is the only way in which a man can become famous without ability.",
        author: "George Bernard Shaw"
    },
    {
        quotes: "If we all did the things we are capable of doing, we would literally astound ourselves.",
        author: "Thomas A. Edison"
    },
    {
        quotes: "Whatever you are by nature, keep to it; never desert your line of talent. Be what nature intended you for and you will succeed.",
        author: "Sydney Smith"
    },
    {
        quotes: "Respect yourself and others will respect you.",
        author: "Confucius"
    },
    {
        quotes: "Genius might be described as a supreme capacity for getting its possessors into trouble of all kinds.",
        author: "Samuel Butler"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;

