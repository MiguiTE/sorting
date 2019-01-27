const total = 100;
let bars = [];
let barwidth = 0;
let sorted = false;
let generateButton;
let sortButton;
let sel;
let func = "Insertion sort";

function setup() {
	createCanvas(800,800);
	background(150);
	barwidth = width / total;


	generateButton = createButton("Generate");
	generateButton.position(10,height + 40)
	generateButton.mousePressed(() => generate());

	sel = createSelect();
	sel.option("Insertion sort");
	sel.option("Bubble sort");
	sel.option("Merge sort");
	sel.option("Quick sort");
	sel.position(110, height + 40)
	sel.changed(() => func = sel.value())

	sortButton = createButton("Sort");
	sortButton.position(250,height + 40)
	//sortButton.mousePressed();
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
