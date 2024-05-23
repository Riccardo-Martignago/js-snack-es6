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
let i = 0
const invitatiObj = invitati.map((prodotto)=> {
    i++;
    return {tableName: "Tavolo Vip", guestName: prodotto, place: i};
})
for(let i = 0; i < invitatiObj.length; i++){
    const invite = invitatiObj[i] 
    console.log(`${invite.tableName}, ${invite.guestName}, ${invite.place}`)
};

