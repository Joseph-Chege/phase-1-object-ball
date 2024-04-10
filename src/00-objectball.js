
const objectBall = {
    home:{
        teamName: "Brooklyn Nets",
        colors: ["white", "black"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
            },
            "Jason Terry": {
                number: 31,
                shoe: 16,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
        }
    },
    away:{
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            "Desanga Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            }
        }
    }
}
}

function gameObject(){
    return objectBall;
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}
  

function numPointsScored (playerName){

    const gameData = gameObject();
    for (let teamKey in gameData){
        let teamSide = gameStats[teamKey];
        debugger;
        let allPlayers = teamSide.players;
        debugger;
        for (let playerKey in allPlayers){
            if (playerKey === playerName){
                return allPlayers[playerKey].points;
            }
        }
    }
}


function shoeSize (){

    const gameStats = gameObject();
    for (let teamKey in gameStats){
        let teamSide = gameStats[teamKey];
        debugger;
        let allPlayers = teamSide.players;
        debugger;
        for (let shoeKey in allPlayers){
            if (shoeKey === playerName){
                return allPlayers[shoeKey].shoe
            }
        }
    }
}


function teamColors (teamName){

    const gameData = gameObject();
    for (let teamKey in gameData){
        let teamSide = gameData[teamKey];
        debugger;
        let teamNames = teamSide.teamName;
        debugger;
        if (teamName === teamNames){
            return teamSide.colors
        }
    }
}


function teamNames (){

    const gameData = gameObject();

    let teamNamesArray = [];
    for (let teamKey in gameData){
        let teamSide = gameData[teamKey];
        debugger;
        let teamNombres = teamSide.teamName;
        debugger;
        teamNamesArray.push(teamNombres)
    }
    return teamNamesArray;
}


function playerNumbers (teamName){

    const gameData = gameObject();

    let kitNumbers = [];
    for (let teamKey in gameData){
        let teamSide = gameData[teamKey];
        debugger;
        let teamNombres = teamSide.teamName;
        debugger;
        if (teamNombres === teamName){
            let allPlayers = teamSide.players;
            for (let playerKey in allPlayers){
                kitNumbers.push(allPlayers[playerKey].number);

            }
        }
        
    }
    return kitNumbers;
}


function playerStats(playerName){
    
    const gameData = gameObject();
    for (let teamKey in gameData){
        let teamSide = gameData[teamKey];
        debugger;
        let allPlayers = teamSide.players;
        debugger;
        for (let statsKey in allPlayers){
            if (statsKey === playerName){
                return allPlayers[statsKey];
            }
        }
    }
}

function bigShoeRebounds (){

    const gameData = gameObject();
    let playerShoeSizes = {};

    for (let teamKey in gameData){
        let teamSide = gameData[teamKey];
        debugger;
        let allPlayers = teamSide.players;
        debugger;
        for (let playerKey in allPlayers){
            playerShoeSizes[playerKey] = allPlayers[playerKey].shoe;

        }
    }

    let shoeSizesArray = Object.values(playerShoeSizes)
    let maximumShoeSize = Math.max(...shoeSizesArray)


    let bigShoeIndex = shoeSizesArray.indexOf(maximumShoeSize)
    let playerNames = object.keys(playerShoeSizes)
    let bigShoePlayer = playerNames[bigShoeIndex]
}