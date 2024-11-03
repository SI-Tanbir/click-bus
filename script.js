


// initalization of seat number

let seat_number=0;



document.querySelector(".button-container").addEventListener('click', (event) => {

    // console.log("button click ",event.target.innerText);
    // event.target.style.backgroundColor='green';
    // event.target.

    // initializing value
    let seat_price=750;
    let seat_name=event.target.textContent;
    let sitshow=document.getElementById('seat-list')

    if(event.target.classList.contains('bus-button')){





        if(event.target.style.backgroundColor == 'green'){
            event.target.style.backgroundColor='';
            seat_number--;

            // remove the child
            sitshow.removeChild(sitshow.lastChild);



        
        }

        else{
            event.target.style.backgroundColor='green';
            seat_number++;

            // sitshow;
            // let li=document.createElement(`<span>${seat_name}</span>  <p> Economi class</p>  <span>${seat_price}</span> `)

            let li=document.createElement('li');


            li.innerText=`${seat_name}    Economic class   ${seat_price} `;


            sitshow.appendChild(li);




        }


        document.getElementById('seat-number').textContent=seat_number;
        


    }







});
