(function (){
    
    // mouseover&nonover title event
    const title = document.querySelector('.title');
    let titleTop = false;
    
    title.addEventListener('mouseover',function(){
        if(!titleTop){
            title.classList.add('titleHover');
        }
    })
    title.addEventListener('mouseout', function(){
        title.classList.remove('titleHover');
    })
    
    // click title event
    title.addEventListener('click', function(){
        console.dir(title);
        title.style.transitionDuration = '0.5s';
        title.style.transform = 'translateY(-30vh)'

        setTimeout(function(){
            title.style.transitionDuration = '0s';
            titleTop = true;
        }, 500);
    });
    
    
})();