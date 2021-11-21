import mongoose from 'mongoose';

let bookSchema = mongoose.Schema({
	'id': String,
	'bookName': String,
	'authorName': String,
	'isbn': String,
	'bookKey': String,
	'readingList': String,
	'favoriteList': String,
	'completedList': String,
});

export default mongoose.model('book', bookSchema);
