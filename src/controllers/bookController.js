import book from '../models/book.js';

const bookController = {
    getAll: async (req, res) => {
        const books = await book.find()
        res.send(books)
    },
    getOne: async (req, res) => {
        let key = req.params.key;

        const responseBook = await book.findOne({ bookKey: key })


        if (responseBook) {
            res.send(responseBook);
        }
        else {
            res.status(404).send("Book not found!")
        }
    },
    create: async (req, res) => {
        let requestBook = new book({
            bookName: req.body.bookName,
            authorName: req.body.authorName,
            isbn: req.body.isbn,
            bookKey: req.body.bookKey,
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
        let key = req.params.key;

        try {
            let existingBook = await book.findOne({ bookKey: key });

            existingBook.bookName = req.body.bookName
            existingBook.authorName = req.body.authorName
            existingBook.isbn = req.body.isbn
            existingBook.bookKey = req.body.bookKey
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
        let key = req.params.key;

        let response = await book.deleteOne({ bookKey: key })

        if (response.deletedCount > 0) {
            res.send("Successfully deleted!")
        }
        else {
            res.status(404).send("Book not found!")

        }
    }
}
export default bookController