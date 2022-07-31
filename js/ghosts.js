const ghosts = 
    [
            {
                name: "The Child",
                img: "baby.png",
                story:"April 26, 1986. The explosion at the Chernobyl nuclear power plant occured at the moment when engineer Vladimir Tyshlangov was coming out after work to meet his wife and daughter who were waiting for him. Sirens wailed alarmingly, clouds of smoke began to rise above the power unit. Dmitry ran into the guards room and took out a spare military-style gas mask. He quickly put it on his daughter. And at the same moment there was a second explosion. This time with such force that the roof of the station flew into the sky with a lot of fragments. Unfortunately, the engineers entire family died at the same moment. But the spirit of the daughter in a black military gas mask returns to the worl of the living, still hoping to find her parents.",
                behavior: "Turns on/off light bulbs, likes to turn on water taps, interacts with doors and move objects in rooms."
            },
            {
                name: "The Darkness",
                img: "thedarkness.png",
                story:"From 1941 to 1944.The Nazis carried out cruel experiments on people in Buchenwald. Basically, they included experiments with incendiary mixtures, dureting the experiments, the subjects were burned with phosphorus, a material that was used for incendiary bombs. But there was a special case when phosphorus was used, the amount of which exceeded the norm by 56 times. David Hammett, was a victim of this experiment. The consequences of this torture could not be predicted by anyone, the body of the subject turned completely black and began to absorb all the light around it.",
                behavior: "Sometimes extinguishes lighted candles, turns off the light bulbs in rooms, interacts with doors and moves objects around."
            },
            {
                name: "Demon",
                img: "demon.png",
                story: "Abbadon is one of the most powerful demons who represents the true power of destruction. The Book of REvelations indicates that Abbadon is still considered an Angel, whose personality has darkened because of this hatred of all living beings.",
                behavior: "Lights candles, trusn off light bulbs, interacts with doors and throws objects around."
            },
            {
                name: "Drowned",
                img: "drowned.png",
                story: "Lake Bodom, Finalnd, June 1960. Four graduates of the local school went to the lake, two girls and two guys. On the night of the 5th of June, an unknown creature entered the girls tent and pulled one of them out into the lake. Her friends, instead of helping her, fled in panic towards the city. The next morning, during police questioning, the victims friends claimed that the creature looked like a human, but it had gills on it's face, and instead of one arm, severeal tentacles. The girls body was never found, it was believed that it is still at the bottom of the lake. There is a legend among the locals, that it was a ritual murder that was comitted by the followers of Cthulhu.",
                behavior: "Turns on water taps, interacts with doors and moves objects in rooms."
            },
            {
                name: "Gallows",
                img: "gallows.png",
                story: "Robert Alton Harris, was convicted of the extremely brutal murder of two teenagers, the man literally forced them to kill each other, as it later turned out in the cout. He 'did not want to get his hands dirty in the face of the Almighty one'. Was sentencted to death by hanging.",
                behavior: "Turns lights on or off in rooms, moves objects in rooms."
            },
            {
                name: "Jianshi",
                img: "jiangshi.png",
                story: "1956, a scientist from Gansu province conducted experiments on the human mind. The purpose of his research was to transfer the human mind from a dead body to a living one. After many experiments, he became convinced that seientific methods did not work and Switched to the occult. He found a book, 'Chapters on the Insight of Truth,' which said that a corpse could be revived if an ancient ritual involving a spell on a piece of paper was reproduced. He stole a corpse from a local morgue, prepared all the details necessary for the ritual and on the night from Sunday to Monday brought his long-standing desires to life. The book did not indicate that the mind of the person who performed the ritual is transferred to the corpse. The body of the scientist fell dead, and the corpse, which had recently been 1ying in the morgue, got up. This half-dead body was seen in many regions of China. There are rumors that even in the guise of a zombie, he continues his work and transfers the minds of people into corpses.",
                behavior: "Sometimes extinguishes lighted candles, turns off the light bulbs in the rooms, opens the doors, throws various objects."
            },
            {
                name: "Poltergeist",
                img: "poltergeist.png",
                story: "On November 21, 2002, the most horrible death ever known to mankind occurred. Bartender Doyle Hatfield had an argument with one of the bar patrons. In the heat of alcohol, the client attacked the bartender, threw him out into the street, broke both his legs and threw him into a manhole, the distance to the day was a little more than 5 meters. The bottom of the sewer was flooded with boiling water. Dovle could not get out of this terrible trap because of the injuries that were inflicted on him. He was still conscious when the ambulance crew arrived at the scene, but no one dared to go down. During the autopsy, the pathologist was shocked, the skin came off the bones, and the internal organs literally boiled in the body of a young guy. His soul cannot feel peace, he is still angry",
                behavior: "Sometimes turns on and off light bulbs in rooms, likes to turn on the water taps, operns the doors, throws various objects."
            },
            {
                name: "Vampire",
                img: "vampire.png",
                story: "This bloodthirsty monster struck terror throughout central Europe in the thirteenth century. This monster killed fifteen hundred people during his 'human' life, when the local authorities managed to catch him, they chained him in a barrel, placed a large amount of resin in it, and threw the barrel itself to the bottom of the deepest well. On the fortieth day of his burial, or rather, in the morning, residents found three bloodless bodies of women near the church. So everyone understood, Count Vargoshi was reborn. Over the next few weeks, a lot of terriiying things happened. Crosses were melting in churches, cattle were dying in herds, a corpse of a priest was found, which was clearly not killed by human being.",
                behavior: "Sometimes extinguishes lighted candles, interacts with the doors, moves objects in rooms."
            }
        ];                
function createItem() {
    const ghostList = document.getElementsByClassName("ghosts");
    console.log(ghostList);

    for (let i = 0; i < ghosts.length; i++) {

        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const divGhost = document.createElement("div");

        const divImg = document.createElement("div");
        const ghostImg = document.createElement("img");

        const divInfo = document.createElement("div");
        const divStory = document.createElement("div");
        const divBehavior = document.createElement("div");
        const spacer = document.createElement("div");
        
        const infohead1 = document.createElement("h3");
        const infohead2 = document.createElement("h3");
        const ghostStory = document.createElement("p");
        const ghostBehaviour = document.createElement("p");

        //Prints item name of index into summary
        summary.innerHTML = ghosts[i].name;
        infohead1.innerHTML = "Story";
        infohead2.innerHTML = "Behavior";
        ghostStory.innerHTML = ghosts[i].story;
        ghostBehaviour.innerHTML = ghosts[i].behavior;
        ghostImg.src = "./images/" + ghosts[i].img;

        divGhost.classList.add("ghost");
        divInfo.classList.add("ghost-info");
        divStory.classList.add("ghost-story");
        divBehavior.classList.add("ghost-behavior");
        spacer.classList.add("spacer");
        
        ghostList[0].appendChild(details);
        details.appendChild(summary);
        details.appendChild(divGhost);
        divGhost.appendChild(divImg);
        divImg.appendChild(ghostImg);
        divGhost.appendChild(divInfo);
        divInfo.appendChild(divStory);
        divStory.appendChild(infohead1);
        divStory.appendChild(ghostStory);
        divInfo.appendChild(divBehavior);
        divBehavior.appendChild(infohead2);
        divBehavior.appendChild(ghostBehaviour);
    }

}

createItem();
console.log(items);
