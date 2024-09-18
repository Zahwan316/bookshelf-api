const hapi = require("@hapi/hapi")
const routes = require("./route/bookshelf")

const init = async() => {
    const server = hapi.server({
        port:9000,
        host:"localhost",
        routes:{
            cors:{
                origin:["*"]
            }
        }
    })

    server.route(routes)

    await server.start()
    console.log("server running at " + server.info.uri)
}


init();