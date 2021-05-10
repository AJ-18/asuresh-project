
var Desert = {
    imageUrl: '/images/Desert.jpg',
    randomString: "This is Desert"
}

var Plains = {
    imageUrl: '/images/Plains.jpg',
    randomString: "This is Plains"
}

var Mountains = {
    imageUrl: '/images/Mountains.jpg',
    randomString: "This is Mountains"
}

var Woodlands = {
    imageUrl: '/images/Woodlands.jpg',
    randomString: "This is Woodlands"
}

exports.terrainArray = Array[Desert, Plains, Mountains, Woodlands];

 exports.newDayTerrain = function(){
    const terrainProb = [1, 2, 3, 4];
    const randomTerrain = terrainProb[Math.floor(Math.random() * terrainProb.length)];

    if (randomTerrain == 1) {
        return Desert
        //return "Desert"
    }

    if (randomTerrain == 2) {
        return Plains
        //return "Plains"
    }

    if (randomTerrain == 3) {
        return Mountains
        //return "Mountains"
    }

    if (randomTerrain == 4) {
        return Woodlands
        //return "Woodlands"
    }
}
