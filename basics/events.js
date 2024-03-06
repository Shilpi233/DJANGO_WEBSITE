function handleClick (){
     const btn1 = document.querySelector('#btn-1');
     const btn2 = document.querySelector('#btn-2');
     

     btn1.addEventListener(
        'click', () => {
            alert('button was clicked');
        }
     );
     btn2.addEventListener(
        'click', 
        () => {
            // alert('button was clicked');
            document.body.style.backgroundColor = 'red';
        }
     );  
};
function handleMouseEvents(){
    const box1 = document.querySelector('#box1');
    const box2 = document.querySelector('#box2');

    box1.addEventListener(
        'mouseover',
        () => {
            box1.style.backgroundColor = 'green';
            box3.style.backgroundColor = 'brown';
        }
    );
        box2.addEventListener(
            'mouseover',
            () => {
                box2.style.backgroundColor = 'yellow';
       }
    );
    box1.addEventListener(
        'mouseleave',
        () => {
            box1.style.backgroundColor = '#000';
            box2.style.backgroundColor = '#fff';
        }
    )
}
function handleKeyEvents(){
    const box2 = document.querySelector('#box2');
    const box3 = document.querySelector('#box3');

    document.body.addEventListener(
        'keydown',
        (event) => {
        
        }
    )
}

handleClick();
handleMouseEvents();