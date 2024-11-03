


// initalization of seat number

let seat_number=0;



document.querySelector(".button-container").addEventListener('click', (event) => {

    // console.log("button click ",event.target.innerText);
    // event.target.style.backgroundColor='green';
    // event.target.

    // initializing value
    let seat_price=750;
    let seat_name=event.target.textContent;

    if(event.target.classList.contains('bus-button')){





        if(event.target.style.backgroundColor == 'green'){
            event.target.style.backgroundColor='';
            seat_number--;


        
        }

        else{
            event.target.style.backgroundColor='green';
            seat_number++;

        }


        document.getElementById('seat-number').textContent=seat_number;
        


    }







});
