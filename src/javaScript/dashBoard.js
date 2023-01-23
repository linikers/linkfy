import { getAlbum, getSearch,getGenre,getMixerOne,getMixertwo,getMixerThree} from "./request.js";


export async function renderSearchName(album) {

    const getUl = document.querySelector('.container__getByName')
     
    getUl.innerHTML = ''

    console.log(album);

    const albumRender = searchByName(album.id, album.picture_big, album.type, album.name,album.link)
    getUl.appendChild(albumRender)

}


function searchByName(id, picture_big, type, name,link) {

    const tagLi            = document.createElement('li')
    const imageArtist      = document.createElement('img')
    const tagDivInfo       = document.createElement('div')
    const tagType          = document.createElement('p')
    const artistName       = document.createElement('h2')
    const tagDivFooter     = document.createElement('div')
    const tagLinkDirection = document.createElement('a')

    tagLi.classList.add('card')
    imageArtist.classList.add('userPerfil')
    tagDivInfo.classList.add('card__info')
    tagDivFooter.classList.add('card__footer')
    tagLinkDirection.classList.add('linkDirection')
    

    tagLinkDirection.id     = id
    tagLinkDirection.href   = link
    tagLinkDirection.target = '_blank'

    imageArtist.src = picture_big
    imageArtist.alt = name

    tagType.innerText    = type
    artistName.innerText = name

    tagLinkDirection.innerText = 'Ir para o album no Deezer'
    
    tagLi.append(imageArtist, tagDivInfo, tagDivFooter)
    tagDivInfo.append(tagType, artistName)
    tagDivInfo.append(tagLinkDirection)

    return tagLi

}


function getByName() {

    const getInput = document.querySelector('#searchByNameId')

    const getButtonSearch = document.querySelector('#buttonSearchByName')

    getButtonSearch.addEventListener('click', async () => {
       
        getInput.innerHTML = ''

        if (getInput.value == '') {

            await getAlbum()

        }
        else {
            await getSearch(getInput.value.toLowerCase())
        }

    })

}


async function renderAlbum(){

    const getSection = document.querySelector('.container')
    const global = await getAlbum()
    
    const data = global.data
    
    data.forEach(albumArray =>{
        let {id,album,title,artist,preview} = albumArray
        
        const albumRender = creatAlbum(id,album.cover_big,title,artist.type,artist.name,preview )
        getSection.appendChild(albumRender)
    })
   
    
}


function creatAlbum(id,cover_big,title,type,name,preview){
    
    const tagLi            = document.createElement('li')
    const imageAlbum       = document.createElement('img')
    const tagDivInfo       = document.createElement('div')
    const albumName        = document.createElement('h2')
    const subTitleName     = document.createElement('p')
    const artistName       = document.createElement('p')
    const tagDivFooter     = document.createElement('div')
    const tagButtonPlay    = document.createElement('button')
    const playAudio        = document.createElement('audio')

    tagLi.classList.add('card')
    imageAlbum.classList.add('user')
    tagDivInfo.classList.add('card__info')
    tagDivFooter.classList.add('card__footer')
    tagButtonPlay.classList.add('playAndStop')
    
    tagButtonPlay.id    = id

    imageAlbum.src = cover_big
    imageAlbum.alt = cover_big

    playAudio.src = preview
    playAudio.id  = id
    
    
    
    albumName.innerText    = title
    subTitleName.innerText = `${type} :`
    artistName.innerText   = name

    tagButtonPlay.innerText    = 'Play'
   
    tagLi.append(imageAlbum,tagDivInfo,tagDivFooter)
    tagDivInfo.append(albumName,subTitleName,artistName)
    tagDivFooter.append(tagButtonPlay,playAudio)


    
      tagButtonPlay.addEventListener('click',()=>{
        if(tagButtonPlay.innerText == 'Play'){
            tagButtonPlay.innerText = 'Stop'
            playAudio.play()
        }

        else if(tagButtonPlay.innerText == 'Stop'){
            tagButtonPlay.innerText = 'Play'
            playAudio.pause()
         }
        
        })
 
    
    return tagLi
}


async function searchGenre(genreName) {
    const select = document.querySelector('select')
    const getSection = document.querySelector('.container')
    
    
    select.addEventListener('change', async () => {
        
        const filtro = await getGenre(select.value)
        
        const search = filtro.data
        getSection.innerHTML =''
        search.forEach(albumArray =>{

            let {id,album,title,artist,preview} = albumArray
            
            const albumRender = creatAlbum(id,album.cover_big,title,artist.type,artist.name,preview )
            
            getSection.appendChild(albumRender)

        })
    })
    

}



function logoutButt() {

    const button = document.querySelector('#logoutButton')

    button.addEventListener('click', () => {

        window.location.replace('/')
    })
}


async function renderMixerOne() {

    const getSection = document.querySelector('.containerOne')
    const global = await getAlbum()

    const data = global.data

    data.forEach(albumArray => {
        let { id, album, title, artist, preview } = albumArray

        const albumRender = creatMixer(id, album.cover_big, title, artist.type, artist.name, preview)
        getSection.appendChild(albumRender)
    })


}



function creatMixer(id, cover_big, title, type, name, preview) {

    const tagLi            = document.createElement('li')
    const imageAlbum       = document.createElement('img')
    const tagDivInfo       = document.createElement('div')
    const albumName        = document.createElement('h2')
    const subTitleName     = document.createElement('p')
    const artistName       = document.createElement('p')
    const tagDivFooter     = document.createElement('div')
    const tagButtonPlay    = document.createElement('button')
    const playAudio        = document.createElement('audio')

    tagLi.classList.add('card')
    imageAlbum.classList.add('user')
    tagDivInfo.classList.add('card__info')
    tagDivFooter.classList.add('card__footer')
   
    tagButtonPlay.classList.add('playAndStop')

    tagButtonPlay.id = id

    imageAlbum.src = cover_big
    imageAlbum.alt = cover_big

    playAudio.src = preview
    playAudio.id = id

    albumName.innerText = title
    subTitleName.innerText = `${type} :`
    artistName.innerText = name

    tagButtonPlay.innerText = 'Play'

    tagLi.append(imageAlbum, tagDivInfo, tagDivFooter)
    tagDivInfo.append(albumName, subTitleName, artistName)
    tagDivFooter.append(tagButtonPlay,playAudio)

    tagButtonPlay.addEventListener('click', () => {

        if (tagButtonPlay.innerText == 'Play') {
            tagButtonPlay.innerText = 'Stop'
            playAudio.play()
        }

        else if (tagButtonPlay.innerText == 'Stop') {
            tagButtonPlay.innerText = 'Play'
            playAudio.pause()

        }

    })

    return tagLi
}


async function renderMixerTwo() {

    const getSection = document.querySelector('.containerTwo')
    const global = await getMixertwo()

    const data = global.data

    data.forEach(albumArray => {
        let { id, album, title, artist, preview } = albumArray

        const albumRender = creatMixerTwo(id, album.cover_big, title, artist.type, artist.name, preview)
        getSection.appendChild(albumRender)
    })


}


function creatMixerTwo(id, cover_big, title, type, name, preview) {

    const tagLi            = document.createElement('li')
    const imageAlbum       = document.createElement('img')
    const tagDivInfo       = document.createElement('div')
    const albumName        = document.createElement('h2')
    const subTitleName     = document.createElement('p')
    const artistName       = document.createElement('p')
    const tagDivFooter     = document.createElement('div')
    const tagButtonFavorit = document.createElement('button')
    const tagButtonPlay    = document.createElement('button')
    const playAudio        = document.createElement('audio')

    tagLi.classList.add('card')
    imageAlbum.classList.add('user')
    tagDivInfo.classList.add('card__info')
    tagDivFooter.classList.add('card__footer')
   
    tagButtonPlay.classList.add('playAndStop')

    tagButtonPlay.id = id

    imageAlbum.src = cover_big
    imageAlbum.alt = cover_big

    playAudio.src = preview
    playAudio.id = id

    albumName.innerText = title
    subTitleName.innerText = `${type} :`
    artistName.innerText = name

    tagButtonPlay.innerText = 'Play'

    tagLi.append(imageAlbum, tagDivInfo, tagDivFooter)
    tagDivInfo.append(albumName, subTitleName, artistName)
    tagDivFooter.append(tagButtonPlay,playAudio)

    tagButtonPlay.addEventListener('click', () => {
        if (tagButtonPlay.innerText == 'Play') {
            tagButtonPlay.innerText = 'Stop'
            playAudio.play()
        }

        else if (tagButtonPlay.innerText == 'Stop') {
            tagButtonPlay.innerText = 'Play'
            playAudio.pause()
        }

    })


    return tagLi
}


async function renderMixerThree() {

    const getSection = document.querySelector('.containerThree')
    const global = await getMixerThree()

    const data = global.data

    data.forEach(albumArray => {
        let { id, album, title, artist, preview } = albumArray

        const albumRender = creatMixerThree(id, album.cover_big, title, artist.type, artist.name, preview)
        getSection.appendChild(albumRender)
    })


}


function creatMixerThree(id, cover_big, title, type, name, preview) {

    const tagLi            = document.createElement('li')
    const imageAlbum       = document.createElement('img')
    const tagDivInfo       = document.createElement('div')
    const albumName        = document.createElement('h2')
    const subTitleName     = document.createElement('p')
    const artistName       = document.createElement('p')
    const tagDivFooter     = document.createElement('div')
    const tagButtonFavorit = document.createElement('button')
    const tagButtonPlay    = document.createElement('button')
    const playAudio        = document.createElement('audio')

    tagLi.classList.add('card')
    imageAlbum.classList.add('user')
    tagDivInfo.classList.add('card__info')
    tagDivFooter.classList.add('card__footer')
   
    tagButtonPlay.classList.add('playAndStop')

    tagButtonPlay.id = id

    imageAlbum.src = cover_big
    imageAlbum.alt = cover_big

    playAudio.src = preview
    playAudio.id = id

    albumName.innerText = title
    subTitleName.innerText = `${type} :`
    artistName.innerText = name

    tagButtonPlay.innerText = 'Play'

    tagLi.append(imageAlbum, tagDivInfo, tagDivFooter)
    tagDivInfo.append(albumName, subTitleName, artistName)
    tagDivFooter.append(tagButtonPlay,playAudio)

    tagButtonPlay.addEventListener('click', () => {
        if (tagButtonPlay.innerText == 'Play') {
            tagButtonPlay.innerText = 'Stop'
            playAudio.play()
        }

        else if (tagButtonPlay.innerText == 'Stop') {
            tagButtonPlay.innerText = 'Play'
            playAudio.pause()
        }

    })


    return tagLi
}


getByName()
renderSearchName()
logoutButt()
searchGenre()
renderAlbum()
renderMixerOne()
renderMixerTwo()
renderMixerThree()


