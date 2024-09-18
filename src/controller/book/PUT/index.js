const {books} = require("../../../data/bookshelf")

const editBook = (req,h) => {
    const {bookId} = req.params
    const {name,year,author,summary,publisher,pageCount,readPage,reading} = req.payload
    const updatedAt = new Date().toISOString() 
    const finished = parseInt(readPage) === parseInt(pageCount) ? true : false
    
    if(name === "" || name === null || !name){
        const response = h.response({
            status:"fail",
            message:"Gagal memperbarui buku. Mohon isi nama buku"
        })
        response.code(400)
        return response
    }
    if(parseInt(readPage) > parseInt(pageCount)){
       
        const response = h.response({
            status:"fail",
            message:"Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
        })
        response.code(400)
        return response
    }

    if(!bookId){
        const response = h.response({
            status:"fail",
            message:"Gagal memperbarui buku. Id tidak ditemukan"
        })
        response.code(404)
        return response
    }

    const findIndex = books.findIndex((item) => item.id == bookId)

    if(findIndex !== -1){
        books[findIndex] = {
            ...books[findIndex],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            finished,
            reading,
            updatedAt
        }
        //writebookfile()

        const response = h.response({
            status:"success",
            message:"Buku berhasil diperbarui"
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status:"fail",
        message:"Gagal memperbarui buku. Id tidak ditemukan"
    })
    response.code(404)
    return response
}

module.exports = editBook