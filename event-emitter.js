const eventEmitter = require('events')
// console.log(eventEmitter);

const myEmitter= new eventEmitter()


myEmitter.on('Birthday', (gift)=>{

    console.log(`Happy birhday to you ji ${gift}`);
    
})

myEmitter.on('Birthday',(upohar)=>{
    console.log(`I will send you ${upohar}`);
})

myEmitter.emit('Birthday', 'jahid')