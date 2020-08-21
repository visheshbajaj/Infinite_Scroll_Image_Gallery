const gallery = document.getElementById('gallery'),
	loader = document.getElementById("loader");

loadImages();

window.addEventListener('scroll', function() {
  if (gallery.scrollTop + gallery.clientHeight >= gallery.scrollHeight)
  	loadImages()
});