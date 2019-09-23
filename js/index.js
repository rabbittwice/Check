(function (){
    
    // click title event
    const title = document.querySelector('.title');

    title.addEventListener('click', function(){
        title.style.transitionDuration = '0.5s';
        title.style.transform = 'translateY(-30vh)'

        setTimeout(function(){
            title.style.transitionDuration = '0s';
        }, 500);
    });
    
    
    
})();