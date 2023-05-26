window.onload = function(){

    document.body.classList.add('loaded')

    Draggable.create('.gallery',{
        bounds: 'body',
        inertia: true
    })
}