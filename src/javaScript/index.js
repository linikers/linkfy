function showSandwishMenu(){
    const body= document.querySelector('body');
    const sandwish= document.querySelector('.fa-bars');

    const renderMenu= ()=>{
        const topHeader= document.createElement('div');
            topHeader.classList.add('top__header__expanded');

        const container= document.createElement('ul');

        const topElement= document.createElement('li');
        topElement.classList.add('top__logo');
        topElement.classList.add('topElement');
            

            const img= document.createElement('img');
                img.src= '../src/assets/spotify.svg';
            const p= document.createElement('p');
                p.innerText='Kenziefy'

            const bottomElement= document.createElement('li');
                bottomElement.classList.add('bottomElement');
            const closeIcon= document.createElement('i');
                closeIcon.classList.add('fa-solid', 'fa-xmark', 'closeIcon');

        body.appendChild(topHeader);
        topHeader.appendChild(container);
        container.append(topElement,bottomElement, closeIcon);
        topElement.append(img, p);

        bottomElement.insertAdjacentHTML('beforeend', 
        `<a class='btn' href='./src/pages/login.html'>Login</a>
        <a class='btn white' href='./src/pages/singup.html'>Cadastre-se</a>`);

        return hideSandwishMenu(closeIcon);
    }

    sandwish.addEventListener('click',renderMenu);
    
    
}
showSandwishMenu()


function hideSandwishMenu (closeButton){
    closeButton.addEventListener('click',()=>{
        const sandwishMenu= document.querySelector('.top__header__expanded')

        sandwishMenu.remove();
    })

}