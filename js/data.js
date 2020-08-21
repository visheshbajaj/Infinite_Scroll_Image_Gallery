function isImage(url) {
	return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

async function getCat() {
	_url = "http://aws.random.cat/meow"
	res = await fetch(_url)
	res = await res.json()
	return res['file']
}

async function getDog() {
	_url = "https://random.dog/woof.json"
	res = await fetch(_url)
	res = await res.json()
	return res['url']
}

async function getFox() {
	_url = "https://randomfox.ca/floof/"
	res = await fetch(_url)
	res = await res.json()
	return res['image']
}

async function fetchImages(num_cats = 3, num_dogs = 3, num_foxes = 3) {
	const cats = new Set(),
		dogs = new Set(),
		foxes = new Set();
	while(cats.size < num_cats) {
		cat = await getCat()
		if(isImage(cat))
			cats.add(cat);
	}
	while(dogs.size < num_dogs) {
		dog = await getDog()
		if (isImage(dog))
			dogs.add(dog);
	}
	while(foxes.size < num_foxes) {
		fox = await getFox()
		if (isImage(fox))
			foxes.add(fox);
	}
	return [
		...Array.from(cats),
		...Array.from(dogs),
		...Array.from(foxes),
	]
}