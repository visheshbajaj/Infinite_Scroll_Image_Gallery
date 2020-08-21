const gallery = document.getElementById('gallery'),
loader = document.getElementById("loader"),
sentinel = document.getElementById("sentinel");

let prevRatio = 0.0;
const rootMargin = "800px",
observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > prevRatio)
			loadImages();
		prevRatio = entry.intersectionRatio;
	});
}, { root: null, rootMargin });
observer.observe(sentinel);