// Change "test" to any username you'd like to start a new game
var username = "Roze";

var socket = io.connect("https://tictactoe.info/", {transports: ['websocket']});
setupSocket();

function setupSocket() {

    // This function is called whenever a new game state is received from the server
    socket.on('gameState', function (jsonGameState) {
        console.log(jsonGameState);

        var jsonstr = JSON.parse(jsonGameState)
        var gold = jsonstr["gold"]
        var shovelinfo = { "name" : jsonstr["equipment"]["shovel"]["name"], "numown" : jsonstr["equipment"]["shovel"]["numberOwned"],
    "cost" : jsonstr["equipment"]["shovel"]["cost"]}
        var excavinfo = { "name" : jsonstr["equipment"]["excavator"]["name"], "numown" : jsonstr["equipment"]["excavator"]["numberOwned"],
        "cost" : jsonstr["equipment"]["excavator"]["cost"]}
        var mineinfo = { "name" : jsonstr["equipment"]["mine"]["name"], "numown" : jsonstr["equipment"]["mine"]["numberOwned"],
        "cost" : jsonstr["equipment"]["mine"]["cost"]}

        document.getElementById("gold").innerHTML = gold
        document.getElementById("shovelname").innerHTML = shovelinfo["name"]
        document.getElementById("shovelnum").innerHTML = shovelinfo["numown"]
        document.getElementById("shovelcost").innerHTML = shovelinfo["cost"]
        document.getElementById("excname").innerHTML = excavinfo["name"]
        document.getElementById("excnumb").innerHTML = excavinfo["numown"]
        document.getElementById("exccost").innerHTML = excavinfo["cost"]
        document.getElementById("minename").innerHTML = mineinfo["name"]
        document.getElementById("minenumb").innerHTML = mineinfo["numown"]
        document.getElementById("minecost").innerHTML = mineinfo["cost"]




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
