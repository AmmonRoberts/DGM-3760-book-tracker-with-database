import book from '../models/book.js';

const bookController = {
    list: (req, res) => {
        return book.find(function (err, books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book.',
                    error: err
                });
            }

            return res.json(books);
        });
    },
    show: (req, res) => {
        let id = req.params.id;

        book.findOne({ _id: id }, function (err, book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book.',
                    error: err
                });
            }

            if (!book) {
                return res.status(404).json({
                    message: 'No such book'
                });
            }

            return res.json(book);
        });
    },
    create: async (req, res) => {
        console.log(req.body)
        let requestBook = new book({
            // bookName: req.body.bookName

        });

        await requestBook.save(function (err, b) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating book',
                    error: err
                });
            }

            return res.status(201).json(requestBook);
        });
    },
    update: (req, res) => {
        let id = req.params.id;

        book.findOne({ _id: id }, function (err, requestBook) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting book',
                    error: err
                });
            }

            if (!requestBook) {
                return res.status(404).json({
                    message: 'No such book'
                });
            }

            // book.readingList = req.body.readingList ? req.body.readingList : book.readingList;

            book.save(function (err, book) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating book.',
                        error: err
                    });
                }

                return res.json(book);
            });
        });
    },
    remove: (req, res) => {
        let id = req.params.id;

        book.findByIdAndRemove(id, function (err, book) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the book.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
}
// export default { list, create, update, remove, show }
export default bookController
