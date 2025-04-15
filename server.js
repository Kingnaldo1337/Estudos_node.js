//import {createServer} from 'node:http'
//const server = createServer((request, response)=>{
//    response.write('hello wordn')
//    return response.end()
//})
//server.listen(3333)


import { fastify } from 'fastify'
import {database_memory} from "./database_memory.js"

const server = fastify()

const database = new database_memory()


//POST para criar
//GET para buscar
//DELETE para deletar
//PUT para alteração
//PATCH mudar pequenas coisas


server.post('/videos', (request, reply)=>{
    const {tittle, description, duration} = request.body


    database.create({
        tittle,
        description,
        duration,
    })


    return reply.status(201).send()
})

server.get('/videos', ()=>{
    const videos = database.list()
    return videos
})

server.put('/videos/:id', ()=>{
    return 'o L'
})

server.delete('/videos/:id', ()=>{
    return 'o L'
})

server.listen({
    port: 3333,
})