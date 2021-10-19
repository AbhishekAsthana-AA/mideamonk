/* storeing imsge in array*/
const arr = [
	"images_source-1.png",
	"images_source-2.png",
	"images_source-3.png",
	"images_source-4.png",
	"images_source-5.png"
];
let index = 0;

function previousImage() {
	index = (index - 1 + arr.length) % arr.length; 
	document.getElementsByTagName("img")[1].src = arr[index];
	
}

function nextImage() {
	index = (index + 1) % arr.length;
	document.getElementsByTagName("img")[1].src = arr[index];
}