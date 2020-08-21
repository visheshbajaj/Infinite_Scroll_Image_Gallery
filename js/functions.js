function appendImagesToDOM(srcArray, parentNode) {
	srcArray.map(src => {
		const ele = document.createElement('img');
		ele.src = src;
		return ele;
	}).forEach(ele => parentNode.appendChild(ele))
} 