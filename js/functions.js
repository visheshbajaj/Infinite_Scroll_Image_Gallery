function getImgDOM(src) {
	const ele = document.createElement('img');
	ele.src = src;
	return ele;
}

col1 = document.getElementById('col-1');
col2 = document.getElementById('col-2');
col3 = document.getElementById('col-3');
function appendImagesToGallery(srcArray) {
	srcArray.map(src => getImgDOM(src)).forEach((ele, i) => {
		i % 3 === 0 && col1.appendChild(ele);
		i % 3 === 1 && col2.appendChild(ele);
		i % 3 === 2 && col3.appendChild(ele);
	})
}

function loadImages() {
	loader.style.display = 'block';
	fetchImages()
		.then(imgs => appendImagesToGallery(imgs))
		.then(() => loader.style.display = 'none');
}
