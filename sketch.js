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
let stepBuble = 0;
function draw() {
	background(151)
	for (let i = 0; i < bars.length; i++) {
		const altura = bars[i];
		if(stepBuble == i){
			fill(255,0,0)
		}else{
			fill(0,255,0)
		}
		rect(i*barwidth,height,barwidth,-altura);
	}
	if(!sorted){
		bubleSort(bars);
		stepBuble++;
	}
	if(stepBuble == total){
		sorted = true;
	}
}


function bubleSort(array) {
	let mini = stepBuble;
	for (let i = stepBuble; i < total; i++) {
		if (bars[mini] >= bars[i]){
			mini = i;
		}
	}
	fill(0,0,255);
	rect(mini*barwidth,height,barwidth,-bars[mini]);
	if(stepBuble >= 0){
		swap(array,mini,stepBuble);
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