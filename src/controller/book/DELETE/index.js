const {books} = require("../../../data/bookshelf")

const deleteBook = (req,h) => {
    //readbookfile()
    const {bookId} = req.params
    const findbookindex = books.findIndex((item) => item.id === parseInt(bookId))
    console.log(findbookindex)
    if(findbookindex !== -1){
        books.splice(findbookindex,1)
        //writebookfile()
        const response = h.response({
            status:"success",
            message:"Buku berhasil dihapus"
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status:"fail",
        message:"Buku gagal dihapus. Id tidak ditemukan"
    })
    response.code(404)
    return response
}

module.exports = deleteBook