const {books} = require("../../../data/bookshelf")

const detailBook = (req,h) => {
    const {bookId} = req.params
    const findbook = books.find((item) => item.id == parseInt(bookId)) || {}
    if(Object.keys(findbook).length === 0 || findbook === null) {
        const response = h.response({
            status:"fail",
            message:"Buku tidak ditemukan"
        })
        response.code(404)
        return response
    }

    const response = h.response({
        status:"success",
        data:{
            book:findbook
        }
    })
    response.code(200)
    return response
}

module.exports = detailBook