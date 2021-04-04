// Code your solutions in this file

function writeCards(names, events){
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    return messages;
}

function countDown (count){ 
    while (count > 0) {
        console.log (count);
        count -= 1;
    }
    console.log (count);
}