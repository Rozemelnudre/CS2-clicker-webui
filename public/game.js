// Change "test" to any username you'd like to start a new game
var username = "Roze";

var socket = io.connect("http://localhost:8080", {transports: ['websocket']});
setupSocket();

function setupSocket() {

    // This function is called whenever a new game state is received from the server
    socket.on('gameState', function (jsonGameState) {
        console.log(jsonGameState);

        var jsonstr = JSON.parse(jsonGameState)
        console.log(jsonstr["equipment"]["shovel"]["numberOwned"])
        var gold = jsonstr["gold"]
        var shovelinfo = { "name" : jsonstr["equipment"]["shovel"]["name"], "numown" : jsonstr["equipment"]["shovel"]["numberOwned"],
    "cost" : jsonstr["equipment"]["shovel"]["cost"]}
        var excavinfo = { "name" : jsonstr["equipment"]["excavator"]["name"], "numown" : jsonstr["equipment"]["excavator"]["numberOwned"],
        "cost" : jsonstr["equipment"]["excavator"]["cost"]}
        var mineinfo = { "name" : jsonstr["equipment"]["mine"]["name"], "numown" : jsonstr["equipment"]["mine"]["numberOwned"],
        "cost" : jsonstr["equipment"]["mine"]["cost"]}
        console.log(shovelinfo["numown"])

        document.getElementById("gold").innerHTML = "You have " + gold.toString() + " gold!"
        document.getElementById("shovelinfo").innerHTML = "You own " + shovelinfo["numown"].toString() + " "
        + shovelinfo["name"].toString() + "(s). They cost " + shovelinfo["cost"].toString() + " gold a piece."
        document.getElementById("excinfo").innerHTML = "You own " + excavinfo["numown"].toString() + " "
        + excavinfo["name"].toString() + "(s). They cost " + excavinfo["cost"].toString() + " gold a piece."
        document.getElementById("mineinfo").innerHTML = "You own " + mineinfo["numown"].toString() + " "
        + mineinfo["name"].toString() + "(s). They cost " + mineinfo["cost"].toString() + " gold a piece."

    




        // TODO: Display the game state on your GUI
        // You must display: current gold, and the name, number owned, and cost for each type of equipment

    });
}



function initializeGame() {
    socket.emit("register", username);

    // TODO: Add any initialization code you'd like to setup your GUI
    // This function is called once when the page loads

}


// Call this function whenever the user clicks your gold button
function clickGold() {
    socket.emit("clickGold");
}


// Call this function whenever the user clicks to purchase equipment
// The parameter is the id of the equipment type to purchase
function buyEquipment(equipmentID) {
    socket.emit("buy", equipmentID);
}
