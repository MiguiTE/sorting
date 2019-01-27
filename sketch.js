const total = 100;
let bars = [];
let barwidth = 0;
let sorted = false;
function setup() {
	createCanvas(800,800);
	background(150);
	barwidth = width / total;
	generate();
}
function draw() {
	background(151)
	for (let i = 0; i < bars.length; i++) {
		const altura = bars[i];
		fill(0,255,0)
		rect(i*barwidth,height,barwidth,-altura);
	}
}

function swap(array, i, j) {
	let tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}

function generate(){
	bars = [];
	for (let i = 0; i < total; i++) {
		const element = random(height);
		bars.push(element);
	}
}