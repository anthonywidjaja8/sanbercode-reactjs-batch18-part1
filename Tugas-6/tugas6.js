//soal 1
const hitungLuasLingkaran = (radius) => {
	let pi = Math.PI;
	return pi * radius * radius;
}

const hitungKelilingLingkaran = (radius) => {
	let pi = Math.PI;
	return 2 * pi * radius;
}

console.log(hitungLuasLingkaran(10));
console.log(hitungKelilingLingkaran(10));

//soal 2
let kalimat = "";

const tambahKata = (kata) => {
	kalimat += `${kata} `;
}

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");

console.log(kalimat);

//soal 3
const newFunction = function literal(firstName, lastName){
	return {
		firstName, lastName,
		fullName: function(){
			console.log(firstName + " " + lastName);
		}
	}
}
 
//Driver Code 
newFunction("William", "Imoh").fullName();

//soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation} = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation);

//soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

//Driver Code
console.log(combined);