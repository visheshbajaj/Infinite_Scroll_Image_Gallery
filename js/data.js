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
	while(cats.size < num_cats)
		cats.add(await getCat());
	while(dogs.size < num_dogs)
		dogs.add(await getDog());
	while(foxes.size < num_foxes)
		foxes.add(await getFox());
	return [
		...Array.from(cats),
		...Array.from(dogs),
		...Array.from(foxes),
	]
}