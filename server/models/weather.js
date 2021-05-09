
var veryHot = {
    id: 0,
    healthChange: -8,
    mileChange: .7,
    Probability: .1
    
}

var Hot = {
    id: 1,
    healthChange: -3,
    mileChange: .9,
    Probability: .1
    
}

var Warm = {
    id: 2,
    healthChange: +1,
    mileChange: 1,
    Probability: .2
    
}

var Cool = {
    id: 3,
    healthChange: +1,
    mileChange: .95,
    Probability: .1
    
}

var Cold = {
    id: 4,
    healthChange: -5,
    mileChange: .8,
    Probability: .1
    
}

var veryCold = {
    id: 5,
    healthChange: -12,
    mileChange: .7,
    Probability: .1
    
}

var Rain = {
    id: 6,
    healthChange: -4,
    mileChange: .6,
    Probability: .1
    
}

var heavyRain = {
    id: 7,
    healthChange: -8,
    mileChange: .4,
    Probability: .05
    
}

var Snow = {
    id: 8,
    healthChange: -15,
    mileChange: .3,
    Probability: .05
    
}

var Blizzard = {
    id: 9,
    healthChange: -30,
    mileChange: .1,
    Probability: .05
    
}

var heavyFog = {
    id: 10,
    healthChange: -3,
    mileChange: .5,
    Probability: .05
    
}

exports.weatherArray = [veryHot, Hot, Warm, Cool, Cold, veryCold, Rain, 
    heavyRain, Snow, Blizzard, heavyFog];

