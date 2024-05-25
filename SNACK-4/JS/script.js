const squadreDiCalcio = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Torino",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Sampdoria",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

function numberRand(max, min){
    return Math.floor(Math.random() * ((max + 1)- min)) + min;
};
const points = squadreDiCalcio.map((element) => {
    let {nome,puntiFatti,falliSubiti} = element;
    puntiFatti = numberRand(5,1);
    falliSubiti = numberRand(5,1);
    return {nome,puntiFatti,falliSubiti};
});
const results = points.map((element) => {
    let {nome, falliSubiti} = element;
    return{nome,falliSubiti};
});
console.log(...results);
console.log(...points);