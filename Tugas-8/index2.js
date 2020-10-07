var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
let i = 0
readBook = (time, books) => {
	readBooksPromise(time, books[i++]).then((timeLeft) => {
	    if(timeLeft > 0 && books.length > i) {
	        readBook(timeLeft, books)
	    }
	}).catch((error) => {
		return
	})
}

readBook(10000, books)