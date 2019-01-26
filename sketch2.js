const total = 150;
let barWidth;
let points = [];

function setup() {
	createCanvas(800, 800)
	for (var i = 0; i < total; i++) {
		points.push(floor(random(height)));
	}
	barWidth = width / total;
	//frameRate(7);
	noStroke();
}
let j = 0;

function draw() {
	translate(0, height);
	insertionSort();
}


function insertionSort() {
	plot();
	for (let k = j; k > 0; k--) {
		if (points[k] < points[k - 1]) {
			let tmp = points[k - 1];
			points[k - 1] = points[k];
			points[k] = tmp;
		} else {
			plotK(k);
			break;
		}
	}
	if (j < points.length) {
		j++;
	}
}

function merge_sort() {
	let [left, right] = divide(points);
	divideMerge(left, right);
	points = merge(left, right)
}

function divide(list) {
	let left = [];
	let right = [];
	for (var i = 0; i < list.length / 2; i++) {
		left.push(list[i]);
	}
	for (var i = list.length / 2; i < list.length; i++) {
		right.push(list[i]);
	}
	return [left, right];
}

function merge(left, right) {
	let tmp = [];
	for (let j = 0; j < right.length; j++) {
		for (let i = 0; i < left.length; i++) {
			if (left[i] <= right[j]) {
				tmp.push(left[i]);
			} else {
				tmp.push(right[j]);
				break;
			}
		}
	}
	return tmp;
}

function divideMerge(left, right) {
	if (left.length <= 1 || right.length <= 1) {
		return merge(left, right);
	}
	let [left1, right1] = divide(left);
	let [left2, right2] = divide(right);

}

function plot() {
	background(150);
	fill(255, 0, 0);
	for (var i = 0; i < points.length; i++) {
		rect(i * barWidth, -points[i], barWidth, points[i]);
	}
}

function plotK(k) {
	background(150);
	for (var i = 0; i < points.length; i++) {
		if (i === k) {
			fill(0, 255, 0);
		} else if (i === j + 1) {
			fill(0, 0, 255);
		} else {
			fill(255, 0, 0);
		}
		rect(i * barWidth, -points[i], barWidth, points[i]);
	}
}