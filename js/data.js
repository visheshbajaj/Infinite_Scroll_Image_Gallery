function isImage(url) {
	return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

async function getCat() {
	_url = "https://aws.random.cat/meow"
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

const animalFetchMap = {
	'cat': getCat,
	'dog': getDog,
	'fox': getFox,
}

const allImages = new Set();
async function getAnimal(type, count) {
	const getAnimal = animalFetchMap[type];
	const animals = new Set();
	while(animals.size < count) {
		animal = await getAnimal()
		if(isImage(animal) && !allImages.has(animal)) {
			animals.add(animal);
			allImages.add(animal);
		}
	}
	return Array.from(animals);
}

async function fetchImages(num_cats = 3, num_dogs = 3, num_foxes = 3) {
	return [
		... await getAnimal('cat', num_cats),
		... await getAnimal('dog', num_dogs),
		... await getAnimal('fox', num_foxes),
	]
}