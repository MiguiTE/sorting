const total = 150;
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
		rect(i*barwidth,height,barwidth,-altura);
	}
}


function generate(){
	for (let i = 0; i < total; i++) {
		const element = random(height);
		bars.push(element);
	}
}