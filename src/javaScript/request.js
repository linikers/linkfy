import { renderSearchName } from "./dashBoard.js";

export async function getSearch(searchName) {

	let album = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${searchName}`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ef2b25390amsh0c06387639e8e42p1265fcjsn5aa36e37abd6',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'

		}
	})
	const albumJsom = await album.json()
    
    
	renderSearchName(albumJsom)
	

}


export async function getAlbum() {

	let album = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=50cent.`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ef2b25390amsh0c06387639e8e42p1265fcjsn5aa36e37abd6',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'

		}
	})

	const albumJsom = await album.json()

	return albumJsom

}


export async function getGenre(genreName) {
	let genre = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${genreName}`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b6414bc119msh5a337c25c1dab1ap192cb8jsn7ea8ffa6a99e',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
		}
	})
	const genreJson = await genre.json()
	
	return genreJson
}

export async function getMixerOne() {

	let album = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=rock.`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ef2b25390amsh0c06387639e8e42p1265fcjsn5aa36e37abd6',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'

		}
	})

	const albumJsom = await album.json()

	return albumJsom

}


export async function getMixertwo() {

	let album = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=rock.`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ef2b25390amsh0c06387639e8e42p1265fcjsn5aa36e37abd6',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'

		}
	})

	const albumJsom = await album.json()

	return albumJsom

}


export async function getMixerThree() {

	let album = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=dark.`, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ef2b25390amsh0c06387639e8e42p1265fcjsn5aa36e37abd6',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'

		}
	})

	const albumJsom = await album.json()

	return albumJsom

}