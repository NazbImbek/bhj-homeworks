const divs = document.querySelectorAll('.reveal');

document.addEventListener('scroll', handler);

function handler () {
    const viewportHeight = window.innerHeight;

    for (let div of divs){
        if (div.getBoundingClientRect().top < viewportHeight){
            div.setAttribute('class', 'reveal reveal_active');
        } else{
            div.setAttribute('class', 'reveal');
        }       
    }
}
