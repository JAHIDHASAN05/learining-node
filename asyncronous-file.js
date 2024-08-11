const fs= require('fs')

// reading file by node js


fs.readFile('./texts/reading.txt', 'utf-8', (err, data)=>{
    if(err){
        throw Error ('Reading error form node js')
     
    }
    console.log('data');

    fs.writeFile('./texts/asyncronousWrittingByNode.txt', data, (err)=>{
        if(err){
            throw Error ('writing error form node js')
        }
    })
})


console.log('if this console fisrt this is asycronous');