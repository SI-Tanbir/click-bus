
document.querySelector(".button-container").addEventListener('click', (event) => {

    // console.log("button click ",event.target.innerText);
    // event.target.style.backgroundColor='green';
    // event.target.


    if(event.target.classList.contains('bus-button')){



        if(event.target.style.backgroundColor == 'green'){
            event.target.style.backgroundColor='';
        
        }

        else{
            event.target.style.backgroundColor='green';
        }


    }




});
