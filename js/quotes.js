const quotes = 
    [
            {
                name: "Beebsis",
                quote: "Can I throw Kiyoi at the ghost?"
            },
            {
                name: "Kiyoi",
                quote: "Why do you always want to throw me?"
            },
            {
                name: "Leyla",
                quote: "I would love to NOT get dragged into the dark basement im scared xd"
            },
            {
                name: "Yameruh",
                quote: "I'll try to grab a child tomorrow when I'm more awake, I caught like 6 of them but it didn't give me achievement."
            },
            {
                name: "Yameruh",
                quote: "Not my dumbass trying to use my mic to talk to the Ouija Board in my first game."
            },
            {
                name: "Rosendal_99",
                quote: "I had to get some new diapers after this."
            },
            {
                name: "Wholf",
                quote: "You don't want papa wholf to be awoooo."
            }
        ];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const spanName = document.getElementById("community-user");
const spanQuote = document.getElementById("community-message");
userName = document.createTextNode(randomQuote.name);
userQuote = document.createTextNode(randomQuote.quote);
spanName.appendChild(userName);
spanQuote.appendChild(userQuote);


console.log(randomQuote);
