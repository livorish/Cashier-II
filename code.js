// Oxana Nefedova

var total = parseFloat(prompt('Total due: ')); 
var paid = parseFloat(prompt('Amount paid: '));
var change = (paid - total).toFixed(2);

console.log("Due: £" + total + "/" + "Paid: £" + paid + "/" + "Change: £" + change);

// bancnote £50

var banknote = {
    info: '£50 notes: ', 
    result: 0,
    value: 50,
}

banknote.result = Math.floor( change / banknote.value );
change = (change%banknote.value).toFixed(2);
banknote.result > 0 ? console.log(banknote.info + banknote.result): 0; 

// bancnote £20

banknote = {
    info: '£20 notes: ', 
    result: 0,
    value: 20,
}

banknote.result = Math.floor( change / banknote.value );
change = (change%banknote.value).toFixed(2);
banknote.result > 0 ? console.log(banknote.info + banknote.result): 0; 

// bancnote £10

banknote = {
    info: '£10 notes: ', 
    result: 0,
    value: 10,
}

banknote.result = Math.floor( change / banknote.value );
change = (change%banknote.value).toFixed(2);
banknote.result > 0 ? console.log(banknote.info + banknote.result): 0; 

// bancnote £5

banknote = {
    info: '£5 notes: ', 
    result: 0,
    value: 5,
}

banknote.result = Math.floor( change / banknote.value );
change = (change%banknote.value).toFixed(2);
banknote.result > 0 ? console.log(banknote.info + banknote.result): 0; 

// bancnote £2

banknote = {
    info: '£2 notes: ', 
    result: 0,
    value: 2,
}

banknote.result = Math.floor( change / banknote.value );
change = (change%banknote.value).toFixed(2);
banknote.result > 0 ? console.log(banknote.info + banknote.result): 0; 

// bancnote £1

banknote = {
    info: '£1 notes: ', 
    result: 0,
    value: 1,
}

banknote.result = Math.floor( change / banknote.value );
change = (change%banknote.value).toFixed(2);
banknote.result > 0 ? console.log(banknote.info + banknote.result): 0; 
 
// coin 50p


var coins = {
    info: '50p coins: ', 
    result: 0,
    value: 0.50,
}
//change  = (change * 100);
coins.result = Math.floor( change / coins.value );
change  = (change % coins.value).toFixed(2);
coins.result > 0 ? console.log(coins.info + coins.result): 0; 

// coin 20p

coins = {
    info: '20p coins: ', 
    result: 0,
    value: 0.20,
}

coins.result = Math.floor( change / coins.value );
change  = (change % coins.value).toFixed(2);
coins.result > 0 ? console.log(coins.info + coins.result): 0; 


// coin 10p

coins = {
    info: '10p coins: ', 
    result: 0,
    value: 0.10,
}

coins.result = Math.floor( change / coins.value );
change  = (change % coins.value).toFixed(2);
coins.result > 0 ? console.log(coins.info + coins.result): 0; 

// coin 5p

coins = {
    info: '5p coins: ', 
    result: 0,
    value: 0.05,
}

coins.result = Math.floor( change / coins.value );
change  = (change % coins.value).toFixed(2);
coins.result > 0 ? console.log(coins.info + coins.result): 0; 

// coin 2p

coins = {
    info: '2p coins: ', 
    result: 0,
    value: 0.02,
}

coins.result = Math.floor( change / coins.value );
change  = (change % coins.value).toFixed(2);
coins.result > 0 ? console.log(coins.info + coins.result): 0; 


// coin 1p

coins = {
    info: '1p coins: ', 
    result: 0,
    value: 0.01,
}

coins.result = Math.floor( change / coins.value );
change  = (change % coins.value).toFixed(2);
coins.result > 0 ? console.log(coins.info + coins.result): 0; 

