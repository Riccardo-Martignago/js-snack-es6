const biciDaCorsa = [
    { 
        nome: "Speedster 3000",
        peso: 7.2
    },
    {
        nome: "RoadRunner Pro",
        peso: 6.8
    },
    {
        nome: "WindCatcher Elite",
        peso: 7.1
    },
    { 
        nome: "HillClimber 500", 
        peso: 7.5
    },
    { 
        nome: "SprintMaster X", 
        peso: 6.9
    },
    {
        nome: "TurboLight S",
        peso: 7.0
    },
    { 
        nome: "AeroBlade Z", 
        peso: 7.3
    },
    { 
        nome: "MountainKing", 
        peso: 7.6
    },
    {
        nome: "Veloce Racer",
        peso: 6.7
    },
    {
        nome: "UltraSpeed 400",
        peso: 6.6
    }
];
let somma = 0;
biciDaCorsa.forEach((element) => {
    let {peso} = element;
    somma = somma + peso
});
biciDaCorsa.forEach((element) => {
    let {peso} = element;
    if(somma > peso){
        somma = peso
    }
});
biciDaCorsa.filter((element) => {
    let {nome,peso} = element;
    if(somma >= peso){
        console.log(`${nome}, ${peso}`)
    }
});