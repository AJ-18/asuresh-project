
var veryHot = {
    id: 0,
    healthChange: -8,
    mileChange: .7,
    Probability: .1,
    Reference: "veryHot" 
    
}

var Hot = {
    id: 1,
    healthChange: -3,
    mileChange: .9,
    Probability: .1,
    Reference: "Hot" 
}

var Warm = {
    id: 2,
    healthChange: +1,
    mileChange: 1,
    Probability: .2,
    Reference: "Warm" 
}

var Cool = {
    id: 3,
    healthChange: +1,
    mileChange: .95,
    Probability: .1,
    Reference: "Cool" 
}

var Cold = {
    id: 4,
    healthChange: -5,
    mileChange: .8,
    Probability: .1,
    Reference: "Cold" 
}

var veryCold = {
    id: 5,
    healthChange: -12,
    mileChange: .7,
    Probability: .1,
    Reference: "veryCold" 
}

var Rain = {
    id: 6,
    healthChange: -4,
    mileChange: .6,
    Probability: .1,
    Reference: "Rain" 
}

var heavyRain = {
    id: 7,
    healthChange: -8,
    mileChange: .4,
    Probability: .05,
    Reference: "heavyRain" 
}

var Snow = {
    id: 8,
    healthChange: -15,
    mileChange: .3,
    Probability: .05,
    Reference: "Snow" 
}

var Blizzard = {
    id: 9,
    healthChange: -30,
    mileChange: .1,
    Probability: .05,
    Reference: "Blizzard" 
}

var heavyFog = {
    id: 10,
    healthChange: -3,
    mileChange: .5,
    Probability: .05,
    Reference: "heavyFog" 
}

exports.weatherArray = [veryHot, Hot, Warm, Cool, Cold, veryCold, Rain, 
    heavyRain, Snow, Blizzard, heavyFog];

