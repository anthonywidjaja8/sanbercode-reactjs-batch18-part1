//soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

kataKedua = kataKedua.charAt(0).toUpperCase().concat(kataKedua.substring(1));
kataKeempat = kataKeempat.toUpperCase();
console.log(kataPertama+' '+kataKedua+' '+kataKetiga+' '+kataKeempat);

//soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

kataPertama = parseInt(kataPertama);
kataKedua = parseInt(kataKedua);
kataKetiga = parseInt(kataKetiga);
kataKeempat = parseInt(kataKeempat);

console.log(kataPertama+kataKedua+kataKetiga+kataKeempat);

//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//soal 4
var nilai = 75;

if(nilai >= 80) console.log('indeksnya A');
else if(nilai >=70 && nilai < 80) console.log('indeksnya B');
else if(nilai >=60 && nilai < 70) console.log('indeksnya C');
else if(nilai >=50 && nilai < 60) console.log('indeksnya D');
else if(nilai < 50) console.log('indeksnya E');

//soal 5
var tanggal = 28;
var bulan = 5;
var tahun = 1997;

tanggal = tanggal.toString();
bulan = bulan.toString();
tahun = tahun.toString();

switch(bulan) {
	case '1': bulan = "Januari"; break;
	case '2': bulan = "Februari"; break;
	case '3': bulan = "Maret"; break;
	case '4': bulan = "April"; break;
	case '5': bulan = "Mei"; break;
	case '6': bulan = "Juni"; break;
	case '7': bulan = "Juli"; break;
	case '8': bulan = "Agustus"; break;
	case '9': bulan = "September"; break;
	case '10': bulan = "Oktober"; break;
	case '11': bulan = "November"; break;
	case '12': bulan = "Desember"; break;
}

console.log(tanggal+' '+bulan+' '+tahun);