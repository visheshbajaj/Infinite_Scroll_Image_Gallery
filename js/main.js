const gallery = document.getElementById('gallery');

fetchImages().then(imgs => appendImagesToDOM(imgs, gallery));