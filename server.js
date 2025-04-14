//import {createServer} from 'node:http'
//const server = createServer((request, response)=>{
//    response.write('hello wordn')
//    return response.end()
//})
//server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', ()=>{
    return 'Hello World'
})

server.get('/1', ()=>{
    return 'faz'
})

server.get('/2', ()=>{
    return 'o L'
})

server.listen({
    port: 3333,
})