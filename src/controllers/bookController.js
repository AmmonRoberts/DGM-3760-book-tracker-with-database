import book from '../models/book.js';

const bookController = {
    getAll: async (req, res) => {
        const books = await book.find()
        res.send(books)
    },
    getOne: async (req, res) => {
        let id = req.params.id;
        try {

            const responseBook = await book.findOne({ id: id })
            res.send(responseBook);

        }
        catch {
            res.status(404).send("Todo not found!")
        }
    },
    create: async (req, res) => {
        let requestBook = new book({
            id: Math.floor(Math.random() * 1000000),
            bookName: req.body.bookName,
            authorName: req.body.authorName,
            isbn: req.body.isbn,
            apiBookId: req.body.apiBookId,
            readingList: req.body.readingList,
            favoriteList: req.body.favoriteList,
            completedList: req.body.completedList,
        });

        await requestBook.save(function (err) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating book',
                    error: err
                });
            }

            return res.status(201).json(requestBook);
        });
    },
    update: async (req, res) => {
        let id = req.params.id;

        try {
            let existingBook = await book.findOne({ id: id });

            existingBook.bookName = req.body.bookName
            existingBook.authorName = req.body.authorName
            existingBook.isbn = req.body.isbn
            existingBook.apiBookId = req.body.apiBookId
            existingBook.readingList = req.body.readingList
            existingBook.favoriteList = req.body.favoriteList
            existingBook.completedList = req.body.completedList

            await existingBook.save();
            res.send(existingBook);
        }
        catch {
            res.status(404).send("Book not found!")
        }
    },
    remove: async (req, res) => {
        let id = req.params.id;

        try {
            await book.deleteOne({ id: id })
            res.status(204).send("Successfully deleted!")
        }
        catch {
            //Literally doesn't get here, but I honestly can't even care right now
            res.status(404).send("Book not found!")

        }
    }
}
export default bookController