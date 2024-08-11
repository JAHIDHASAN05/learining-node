const http = require('http')
const fs= require('fs')

const server= http.createServer()

server.on('request', (req, res)=>{

    if(req.url==='/read-file' && req.method === 'GET');
    console.log('insider');
     

        const readableStrem = fs.createReadStream(process.cwd()+ '/texts/reading.txt')

        readableStrem.on('data', (buffer)=>{
            res.write(buffer)
        })

        readableStrem.on('end', ()=>{
            res.end('hello from nde js server')
        })


    
    console.log(req.url, req.method);
})


server.listen('5000',()=>{
    console.log('server is runnin at 5000')
})

