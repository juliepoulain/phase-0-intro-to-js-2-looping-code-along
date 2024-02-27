// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {[loop body]}

function writeCards(names, event){
    const messages = []
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

// while ([condition]) {[loop body]}

function countDown(positiveInteger){
    while (positiveInteger >= 0) {
        console.log(positiveInteger--)
    }
}