function getImgDOM(src) {
	const ele = document.createElement('img');
	ele.src = src;
	return ele;
}

function appendImagesToDOM(srcArray, parentNode) {
	srcArray.map(src => getImgDOM(src)).forEach(ele => parentNode.appendChild(ele))
}

function loadImages() {
	loader.style.display = 'block';
	fetchImages()
		.then(imgs => appendImagesToDOM(imgs, gallery))
		.then(() => loader.style.display = 'none');
}
