//soal 1
//Release 0
class Animal {
	constructor(name) {
		this._name = name;
		this._legs = 4;
		this._cold_blooded = false;
	}

	get name() {
		return this._name;
	}

	get legs() {
		return this._legs;
	}

	set legs(legs) {
		this._legs = legs;
	}

	get cold_blooded() {
		return this._cold_blooded;
	}
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

//Release 1
class Frog extends Animal {
	constructor(name) {
		super(name);
	}

	jump() {
		console.log("hop hop");
	}
}

class Ape extends Animal {
	constructor(name) {
		super(name);
		this._legs = 2;
	}

	yell() {
		console.log("Auooo");
	}
}

var sungokong = new Ape("kera sakti");
sungokong.yell();
 
var kodok = new Frog("buduk");
kodok.jump(); 

//soal 2
class Clock {
    constructor({template}) {
        this._template = template;
        this._timer = "";
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this._template.replace('h', hours).replace('m', mins).replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this._timer);
    }

    start() {
        this.render();
        this._timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();