
const { nanoid } = require("nanoid")
const {books} = require("../../../data/bookshelf")

 const addBook = (req,h) => {
    const {name,year,author,summary,publisher,pageCount,readPage,reading} = req.payload
      
    if(!name ||name === "" || name === null){
        const response = h.response({
            status:"fail",
            message:"Gagal menambahkan buku. Mohon isi nama buku",
        })
        response.code(400)
        return response
    }

      if(parseInt(readPage) > parseInt(pageCount)){
          const response = h.response({
              status:"fail",
              message:"Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
          })
          response.code(400)
          return response
      }

      const id = nanoid(16)
      const finished = parseInt(readPage) === parseInt(pageCount) ? true : false
      const insertedAt = new Date().toISOString()
      const updatedAt = insertedAt

      const newBook = {
          id,name,year,author,summary,publisher,pageCount,readPage,finished,reading,insertedAt,updatedAt
      } 

      books.push(newBook)

      const isSuccess = books.filter((item) => item.id === id).length > 0
      
       if(isSuccess){
          //writebookfile()
          const response = h.response({
              status:"success",
              message:"Buku berhasil ditambahkan",
              data:{
                bookId:id
              }
          })
          response.code(201)
          return response
      }

       const response = h.response({
          status:"fail",
          message:"Buku gagal ditambahkan",
      })
      response.status(400)
      return response   
}

module.exports = addBook