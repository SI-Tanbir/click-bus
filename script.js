// Select the button container and elements to display seat count and list
const buttonContainer = document.querySelector('.button-container');
const seatNumberDisplay = document.getElementById('seat-number');
const seatList = document.getElementById('seat-list');
const totalPriceDisplay = document.querySelector('.grand-total'); // Assuming this is where total price should go

// Initialize selected seat count and total price
let selectedSeats = 0;
let totalPrice = 0;
const seatPrice = 550; // Price per seat

buttonContainer.addEventListener('click', (event) => {
    // Check if the clicked element is a bus button
    if (event.target.classList.contains('bus-button')) {
        // Toggle active class on the seat button
        event.target.classList.toggle('active');

        const seatId = event.target.textContent; // Get seat ID like "A1", "B2", etc.
        let seatItem = document.getElementById(`seat-${seatId}`); // Check if seat is already in the list

        if (event.target.classList.contains('active')) {
            selectedSeats++; // Increase selected seat count
            totalPrice += seatPrice; // Add price of the selected seat

            // Add seat details to the list if it doesn't already exist
            if (!seatItem) {
                seatItem = document.createElement('li');
                seatItem.id = `seat-${seatId}`;
                seatItem.innerHTML = `<span>${seatId}</span> <span>Economy Class</span> <span>BDT ${seatPrice}</span>`;
                seatList.appendChild(seatItem); // Append seat details to the list
            }
        } else {
            selectedSeats--; // Decrease selected seat count
            totalPrice -= seatPrice; // Subtract price of deselected seat

            // Remove seat from the list if it exists
            if (seatItem) {
                seatList.removeChild(seatItem);
            }
        }

        // Update display values for seat count and total price
        seatNumberDisplay.textContent = selectedSeats;
        totalPriceDisplay.textContent = totalPrice;
    }
});
