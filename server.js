const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middleaware = jsonServer.defaults()



server.use(middleaware)



server.use(router)

server.listen(3000, () => {
    console.log(`Json Server is running`)
})