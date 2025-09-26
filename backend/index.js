const dotenv = require('dotenv')

dotenv.config();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

let books = [];
let currId = 1;




app.use(express.json());

app.get('/', async (req, res) => {


    try {
        const { status, genre } = req.query;
        let result = [...books]

        // if(status){
        //     if(st)
        // }
        if (genre) {
            result = result.filter(i => i.genre.toLowerCase() === genre.toLowerCase())
        }
        res.status(200).json({ books: result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal sever error.", error: error.message })
    }
})


app.post('/add-book', async (req, res) => {
    try {

        const { title, author, genre, status = [] } = req.body;

        if (!title || !author || !genre || !status) {
            return res.status(401).json({ msg: "All fields should be required" })
        }

        const book = {
            id: currId++,
            title,
            author,
            genre,
            status
        }

        books.push(book);

        res.status(201).json(books)

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal sever error.", error: error.message })
    }
})


app.put('/book/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const idx=books.findIndex(i=>i.id===id);

        if(idx===-1){
            return res.status(404).json({msg:"book not found"})

        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal sever error.", error: error.message })
    }
})



app.listen(port, async () => {
    try {
        console.log(`server is running on : ${port}`)
    } catch (error) {
        console.log(error)
    }
})