const items = 
    [
            {
                name: "Motion Sensor",
                use:"You place it down on the ground and it'll turn towards the ghost with the green laser.",
                description: "A device that helps to determine the location of the ghost. Place the device on the floor, and when a ghost approaches the device directs a laser beam in it's direction."
            },
            {
                name: "Plasma Absorber",
                use: "You place it on the ground and it'll weaken or repel the ghost if it's close enough when it's active. This does recharge so be warry when it's charged and not.",
                description: "A device that can weaken a ghost. If you made a few mistakes when catching a ghost and seriously angered him, then just use a plasma absorber, it is able to drive away the spirit for a while. This device has a fairly long radius and it's recommended to place around the center of the room. Everyone should still be using other handheld protectives meanwhile within it's range for a higher chance of surviving a hunt."
            },
            {
                name: "Danger Detector",
                use: "This will detect danger when the ghost is close and make a loud beeping sound.",
                description: "This is a gadget that will allow you to stay at a safe distance from the ghost. Upon close contact with the spirit the devices begins to beep loudly, which helps you escape from the threat."
            },
            {
                name: "Withering Light",
                use: "You place it on the ground and it'll weaken or repel the ghost if it's close enough when it's active. This does recharge so be warry when it's charged and not.",
                description: "An incredibly strong source of light that can scare away a ghost for a long enough peroid of time, but be careful while using it, do not blind your teammates."
            },
            {
                name: "Holy Salt",
                use: "Holy salt is a throwable item and needs to be thrown on the ghost - not close but on.",
                description: "Holy salt calms the ghost, you need to be very accurate and fairly close in order to throw any salt and have a high chance of success."
            },
            {
                name: "Fire Salt",
                use: "Holy salt is a throwable item and needs to be thrown on the ghost - not close but on.",
                description: "Fire salt can stun for a few seconds works as regular salt on strong ghosts, you need to be very accurate and fairly close in order to throw any salt and have a high chance of success."
            },
            {
                name: "Salt",
                use: "Holy salt is a throwable item and needs to be thrown on the ghost - not close but on.",
                description: "Drives away the ghost for a short period of time."
            },
            {
                name: "Video Camera with Motion Sensor",
                use: "Place it on the ground and it'll start 'recording' once the ghost is in it's sight.",
                description: "This Video Camera will turn on once it has detected motion in it's area and you'll be able to use it to cover a bigger area.    "
            },
            {
                name: "Photo Camera with Motion Sensor",
                use: "Place it on the ground, it'll take a photo when the ghost moves in front of it.",
                description: "Similar to the Motion sensor device, that will turn itself in the range of the ghost and take a photo of it."
            },
            {
                name: "Oija Board",
                use: "You just need to throw the board on the ground, it'll work on it's own but you might be able to speed it up by talking to the ghost.",
                description: "The Oija board can give you different answers, but the way to use it is very simple. Simply put it down near where you think the ghost is, then after a fair amount of activity it can start to move from side to side, randomly or not move at all."
            },
            {
                name: "EMF Sensor",
                use: "Needs to be held in your hand meanwhile you walk around and try to catch the ghost activity.",
                description: "The device is used to detect ghost activity - each ghost is different in terms of EMF, you have the 5 EMF levels and then you got the extra 3 RED. Based on these you'll be able to figure out more about the ghost."
            },
            {
                name: "UV Flashlight",
                use: "Held in hand, left mouse button to turn on, you'll need to look around the places on the ground to find clues.",
                description: "This is used to find footsteps and help you identify the ghost. There's currently no fingerprints other similar in the game."
            },
            {
                name: "Video on a Tripod",
                use: "Place it on the ground and it'll record constnatly.",
                description: "Simply just a running video camera on a tripod."
            },
            {
                name: "Camera on a Tripod",
                use: "Place it on the ground and you'll be able to take photos",
                description: "Simply just a camera on a tripod."
            },
            {
                name: "Voodoo Doll",
                use: "Place it on the ground and let the ghost play with it, you can try and speed it up by talking to the ghost.",
                description: "So, the Voodoo Doll is something that helps us identify the ghost. The Voodoo Doll is great together with the radio for communication."
            },
            {
                name: "Particle Counter",
                use: "Held in hand, you'll need to walk around and see where the ghost particles are.",
                description: "The particle counter will count the air particles around it, the higher the older the ghost. If you got 100-500 it's old, if you got 500-1000 it's ancient etc."
            },
            {
                name: "Thermometer",
                use: "Held in hand, you'll need to walk around and check the temps, you get the best response from where the ghost just was seen.",
                description: "Thermometer displays the temps of where you're looking at, this is a very great tool early game to figure out where the ghost is or where it's regularly walking. If the temp skyrockets, you'll know it's a demon."
            },
            {
                name: "Small Flaslights",
                use: "Held in hand, less intensive flashlight.",
                description: "The small flashlight is a normal handheld flashlight."
            },
            {
                name: "Big Flaslight",
                use: "Held in hand, more intensive flashlight.",
                description: "A bigger and more intensive flashlight."
            },
            {
                name: "Standing Light",
                use: "Place it on the ground, preferable near a safe zone or equipment, so you can see the equipment and most important Board and Doll.",
                description: "The standing light is a construction light that is used to light a bigger area in front of it."
            },
            {
                name: "Lighter",
                use: "Held in hand, left click to turn on and move your cursor over the candles.",
                description: "A lighter which will emit a lower area of light, but can be used to turn on candles."
            },
            {
                name: "Photo Camera",
                use: "Held in hand, left click to use. You have 3 photos so use them sparringly.",
                description: "The Camera can be used to take a photo of the ghost and other events."
            },
            {
                name: "Video Camera",
                use: "Held in hand, the video camera works from the time you've picked it up. It'll get distorted if the ghost is nearby.",
                description: "The video camera can be used to take a video of the ghost and sense where it's around"
            },
            {
                name: "Holy Water",
                use: "Throwable object - you must hit the ghost, not something nearby.",
                description: "Holy Water can be thrown at the ghost to irritate or repel it. The ghost might be immune."
            },
            {
                name: "Golden Bomb",
                use: "Throwable object - you must hit the ghost, not something nearby.",
                description: "Golden Bomb can be thrown at the ghost to irritate or repel it. The ghost might be immune."
            },
            {
                name: "Silver Bomb",
                use: "Throwable object - you must hit the ghost, not something nearby.",
                description: "Golden Bomb can be thrown at the ghost to irritate or repel it. The ghost might be immune."
            },
            {
                name: "Jesus Christ Statue",
                use: "Held in hand, you need to hold it in your hand before the ghost starts to attack you. This will save you if your evidence is correct",
                description: "Jesus Christ our lord and saviour, can save you from dying to the ghost."
            },
            {
                name: "Incense",
                use: "Held in hand, you need to hold it in your hand before the ghost starts to attack you. This will save you if your evidence is correct",
                description: "Incenses, can save you from dying to the ghost."
            },
            {
                name: "Cross or Crucifix",
                use: "Held in hand, you need to hold it in your hand before the ghost starts to attack you. This will save you if your evidence is correct",
                description: "Cross or Crucifix, can save you from dying to the ghost."
            },
            {
                name: "Holy Fire",
                use: "Throwable object - you must hit the ghost, not something nearby.",
                description: "Mostly used in weaknings, not much other info about it currently."
            },
            {
                name: "Ritual Dagger",
                use: "Throwable object - Beware, it'll mess with the ghost but make it visible.",
                description: "This item will make the ghost angry at everyone and become visible for a peroid of time as well - great way to anger the dead."
            },
            {
                name: "Magic Powder",
                use: "Throwable object - you must hit the ghost.",
                description: "The Magic Powder will help you see where the ghost is walking upon contact with it. It'll leave a faint glowing trail as it moves for a period of time."
            },
            {
                name: "Radio",
                use: "Held in hand or placed somewhere.",
                description: "Can be used to ask questions and possibly get a response - remember to listen carefully."
            },
            {
                name: "Ghost Catcher",
                use: "Throwable object - you must hit the ghost, not something nearby.",
                description: "The Ghost Catcher is the final equipment you'll be using in this game, after you've weakened the ghost in the correct order - you'll need to right click throw this item at the ghost, if it doesn't work then you most likely failed at one of the weakning points and will have to figure out which one and do it again."
            },
        ];                

/*
 const item = items[Math.floor(Math.random() * items.length)];
const spanName = document.getElementById("community-user");
const spanQuote = document.getElementById("community-message");
userName = document.createTextNode(randomQuote.name);
userQuote = document.createTextNode(randomQuote.quote);
spanName.appendChild(userName);
spanQuote.appendChild(userQuote);
*/
const itemList = document.getElementsByClassName("item-list");
console.log(itemList);

for (let i = 0; i < items.length; i++) {

    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const div = document.createElement("div");
    const spacer = document.createElement("div");
    
    const itemSpan1 = document.createElement("span");
    const itemSpan2 = document.createElement("span");
    const itemUse = document.createElement("p");
    const itemDesc = document.createElement("p");

    //Prints item name of index into summary
    summary.innerHTML = items[i].name;
    itemSpan1.innerHTML = "USE: ";
    itemSpan2.innerHTML = "DESCRIPTION: ";
    itemUse.innerHTML = items[i].use;
    itemDesc.innerHTML = items[i].description;

    div.classList.add("item-info-div");
    spacer.classList.add("spacer");
    
    itemList[0].appendChild(details);
    details.appendChild(summary);
    details.appendChild(div);
    div.appendChild(itemSpan1);
    div.appendChild(itemUse);
    div.appendChild(spacer);
    div.appendChild(itemSpan2);
    div.appendChild(itemDesc);
}

console.log(items);
