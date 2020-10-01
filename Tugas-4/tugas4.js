//soal 1
var loop = 0;

console.log("LOOPING PERTAMA");
while(loop < 20) {
	loop += 2;
	console.log(loop+" - I love coding");
}

console.log("LOOPING KEDUA");
while(loop >= 2) {
	console.log(loop+" - I will become a frontend developer");
	loop -= 2;
}

//soal 2
for(var i = 1; i <= 20; i++) {
	if(i%2 != 0) {
		(i%3 == 0) ? console.log(i+ " - I Love Coding") : console.log(i+" - Santai");
	}
	else if(i%2 == 0) console.log(i+" - Berkualitas");
}

//soal 3
var pagar = "";
for(var i = 0; i < 7; i++) {
	pagar += "#";
	console.log(pagar);
}

//soal 4
var kalimat = "saya sangat senang belajar javascript";
var splitKalimat = kalimat.split(" ");
console.log(splitKalimat);

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

for(var i = 0; i < daftarBuah.length; i++) {
	console.log(daftarBuah[i]);
}