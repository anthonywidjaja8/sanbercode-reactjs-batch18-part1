var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
let i = 0
readBook = (time, books) => {
	readBooks(time, books[i++], (timeLeft) => {
		if(timeLeft > 0 && books.length > i){
			readBook(timeLeft, books)
		}
	})
}

readBook(10000, books)