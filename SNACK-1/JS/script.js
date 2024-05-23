const invitati = [ 
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni',  
    'George Clooney', 
    'Amal Clooney', 
    'Fedez', 
    'Amadeus', 
    'Fiorello'
]
console.log(invitati)
let i = 0
const invitatiObj = invitati.map((prodotto)=> {
    i++;
    return {tableName: "Tavolo Vip", guestName: prodotto, place: i};
})
console.log(invitatiObj);

