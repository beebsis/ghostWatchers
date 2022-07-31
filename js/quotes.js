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
            },
            {
                name: "Beebsis",
                quote: "Insane Diff scammed me, I went bankrupt. :C"
            },   
            {
                name: "FaTaLKaDe",
                quote: "My ball skills are bad."
            },
            {
                name: "Jayy",
                quote: "the drowned does have a dump truck tbh"
            },
            {
                name: "Nicu",
                quote: "You need help? But my couch will be empty... and I would have to move..."
            },
            {
                name: "Yameruh",
                quote: "Us chasing the monke through the house to put him in the Pokeball."
            },
            {
                name: "Leyla",
                quote: "No Nicu, I hate you that's it. I love everyone else."
            },
            {
                name: "Yameruh",
                quote: "Swiggity swooty, the darkness is coming for my booty."
            },
            {
                name: "Leyla",
                quote: "Nicu go back to the basement."
            },
            {
                name: "Rey Winter",
                quote: "Is it weird that I want to be able to kick the child ghost lol"
            },
            {
                name: "Twitch: fuwamaki",
                quote: "Baby get in the box!"
            },
            {
                name: "Twitch: fuwamaki",
                quote: "I want to add a baby to our collection!"
            }
        ];

function randomMessage() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const spanName = document.getElementById("community-user");
    const spanQuote = document.getElementById("community-message");
    userName = document.createTextNode(randomQuote.name);
    userQuote = document.createTextNode(randomQuote.quote);
    spanName.appendChild(userName);
    spanQuote.appendChild(userQuote);
}

randomMessage();

console.log(randomMessage);