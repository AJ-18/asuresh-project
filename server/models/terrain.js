
var Desert = {
    imageUrl: '',
    randomString: "This is Desert"
}

var Plains = {
    imageUrl: '',
    randomString: "This is Plains"
}

var Mountains = {
    imageUrl: '',
    randomString: "This is Mountains"
}

var Woodlands = {
    imageUrl: '',
}

exports.terrainArray = Array[Desert, Plains, Mountains, Woodlands];

 exports.newDayTerrain = function(){
    const terrainProb = [1, 2, 3, 4];
    const randomTerrain = terrainProb[Math.floor(Math.random() * terrainProb.length)];

    if (randomTerrain == 1) {
        return Desert
    }

    if (randomTerrain == 2) {
        return Plains
    }

    if (randomTerrain == 3) {
        return Mountains
    }

    if (randomTerrain == 4) {
        return Woodlands
    }
}
