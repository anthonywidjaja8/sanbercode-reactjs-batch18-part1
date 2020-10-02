//soal 1
function halo() {
	return "Halo Sanbers!";
}

console.log(halo());

//soal 2
function kalikan(num1, num2) {
	return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

//soal 3
function introduce(name, age, address, hobby) {
	return "Nama saya "+ name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}
 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

//soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objectDaftarPeserta = {};
objectDaftarPeserta.nama = arrayDaftarPeserta[0];
objectDaftarPeserta["jenis kelamin"] = arrayDaftarPeserta[1];
objectDaftarPeserta.hobi = arrayDaftarPeserta[2];
objectDaftarPeserta["tahun lahir"] = arrayDaftarPeserta[3];

console.log(objectDaftarPeserta);

//soal 5
var daftarBuah = [
	{
		nama: "strawberry",
		warna: "merah",
		"ada bijinya": "tidak",
		harga: 9000 
	},
	{
		nama: "jeruk",
		warna: "oranye",
		"ada bijinya": "ada",
		harga: 8000 
	},
	{
		nama: "Semangka",
		warna: "Hijau & Merah",
		"ada bijinya": "ada",
		harga: 10000 
	},
	{
		nama: "Pisang",
		warna: "Kuning",
		"ada bijinya": "tidak",
		harga: 5000 
	}
];

console.log(daftarBuah[0]);

//soal 6
var dataFilm = [];

function tambahDataFilm(namaFilm, durasiFilm, genreFilm, tahunFilm) {
	var objectDataFilm = {};
	objectDataFilm.nama = namaFilm;
	objectDataFilm.durasi = durasiFilm;
	objectDataFilm.genre = genreFilm;
	objectDataFilm.tahun = tahunFilm;
	dataFilm.push(objectDataFilm);

	return dataFilm;
}

tambahDataFilm("Who Am I", "1 jam 46 menit", "Techno-Thriller", 2014);
tambahDataFilm("Hacked", "1 jam 58 menit", "Techno-Thriller", 2020);
console.log(dataFilm);