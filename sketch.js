const total = 100;
let bars = [];
let barwidth = 0;
let sorted = true;
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
	generateButton.mousePressed(generate);

	sel = createSelect();
	sel.option("Insertion sort");
	sel.option("Bubble sort");
	sel.option("Merge sort");
	sel.option("Quick sort");
	sel.position(110, height + 40)
	sel.changed(() => func = sel.value())

	sortButton = createButton("Sort");
	sortButton.position(250,height + 40)
	sortButton.mousePressed(() => sorted = false);
}

let i = 1;
let j = i

function draw() {
	background(151)
	for (let i = 0; i < bars.length; i++) {
		const altura = bars[i];
		fill(0,255,0)
		rect(i*barwidth,height,barwidth,-altura);
	}
	if (!sorted && bars.length > 0){
		switch (func) {
			case "Insertion sort":
				// for (let i = 1; i < bars.length; i++) {
				// 	let j = i;
				// 	while (j > 0 && bars[j-1] > bars[j]) {
				// 		fill(255,255,0)
				// 		rect(j*barwidth,height,barwidth,-bars[j]);
				// 		swap(bars, j, j-1);
				// 		j--;
				// 	}
				// }
				fill(255,255,0)
				rect(j*barwidth,height,barwidth,-bars[j]);
				if (j > 0 && bars[j-1] > bars[j]){
					swap(bars, j, j-1);
					j--;	
				}else{
					i++;
					j = i;
				}
				if ( i == bars.length){
					sorted = true;
					i = 1;
					j = i;
				}
				break;
		}
	}
}


// function sorting(){
// 	if (bars.length > 0){
// 		switch (func) {
// 			case "Insertion sort":
// 				for (let i = 1; i < bars.length; i++) {
// 					let j = i;
// 					while (j > 0 && bars[j-1] > bars[j]) {
// 						fill(255,255,0)
// 						rect(j*barwidth,height,barwidth,-bars[j]);
// 						swap(bars, j, j-1);
// 						j--;
// 					}
// 				}
// 				break;
// 		}
// 	}
// }

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
