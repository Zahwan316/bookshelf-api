const {books} = require("../../../data/bookshelf")

const allBook = (req,h) => {
    const {name,reading,finished} = req.query
    const allbook = books.map((item) =>  {
        return {"id":item.id,"name":item.name,"publisher":item.publisher}
    })

    if(name){
        const findbook = books.filter((item) => item.name.includes(name)).map(item => {return {id:item.id,name:item.name,publisher:item.publisher}});
        const res = h.response({
            status:"success",
            data:{
                books:findbook
            }
        })
        res.code(200)
        return res
    }

    if(reading){
        const findbook = books.filter((item) => item.reading == parseInt(reading)).map((item) => {return {id:item.id,name:item.name,publisher:item.publisher}})
        const res = h.response({
            status:"success",
            data:{
                books:reading == 1 || reading == 0 ? findbook : allbook
            }
        })
        res.code(200)
        return res
    }

    if(finished){
        const findbook = books.filter((item) => item.finished == finished).map((item) => {return {id:item.id,name:item.name,publisher:item.publisher}})
        const res = h.response({
            status:"success",
            data:{
                books:finished == 1 || finished == 0 ? findbook : allbook
            }
        })
        res.code(200)
        return res
    }

    const response = h.response({
        status:"success",
        data:{
            books:allbook
        }
    })
    response.code(200)
    return response

}

module.exports = allBook