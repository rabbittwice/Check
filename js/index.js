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
            sayHello();
        }, 500);
    });

    const hello = document.querySelector('.hello');

    function sayHello(){
        hello.style.display = 'block';
        hello.style.transitionDuration = '1s';
        if (titleTop) {
            setTimeout(function(){
                hello.style.opacity = '1';
            }, 500);
            setTimeout(function(){
                hello.style.opacity = '0';
            }, 2000)
        }
    };
    
})();