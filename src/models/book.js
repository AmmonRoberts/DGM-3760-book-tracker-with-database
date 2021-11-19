import mongoose from 'mongoose';

let bookSchema = mongoose.Schema({
	'bookName': String,
	'authorName': String,
	'isbn': String,
	'apiBookId': String,
	// 'lists': [String]
});

export default mongoose.model('book', bookSchema);
