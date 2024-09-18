const allBook = require("../controller/book/GET/index.js")
const detailBook = require("../controller/book/GET/detail.js")
const deleteBook = require("../controller/book/DELETE/index.js")
const editBook = require("../controller/book/PUT/index.js")
const addBook = require("../controller/book/Post/index.js")

const routes = [
    {
        method:"GET",
        path:"/",
        handler:() => {
            return "Index route"
        }
    },
    {
        method:"GET",
        path:"/books",
        handler:allBook   
    },
    {
        method:"GET",
        path:"/books/{bookId}",
        handler:detailBook     
    },
    {
        method:"POST",
        path:"/books",
        handler:addBook
    },
    {
        method:"DELETE",
        path:"/books/{bookId}",
        handler:deleteBook
    },
    {
        method:"PUT",
        path:"/books/{bookId}",
        handler:editBook
    },

    //return error if route not found

    {
        method:"*",
        path:"/",
        handler:() => {
            return "Halaman tidak dapat diakses dengan method tersebut"
        }
    }
]


module.exports = routes