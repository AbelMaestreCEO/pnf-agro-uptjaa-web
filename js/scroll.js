window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj = animacion.getBoundingClientRect().top;
    console.log(posicionObj);
    let tamañoPantalla = this.window.innerHeight/5;

    if(posicionObj < tamañoPantalla){
        animacion.style.animation = 'mover 1s ease-out'
    }
});