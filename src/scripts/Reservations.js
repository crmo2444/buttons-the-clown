//responsible for getting list of reservations from application state

import { deleteReservation, getRequests } from "./dataAccess.js";


//use map to generate and display HTML for a list of these

export const Reservations = () => {
    let reservations = getRequests()

    let html = "<ul>"

    let reservationList = reservations.map(reservation => { 

        return `   <li>Party at ${reservation.address} on 
        ${reservation.date} for ${reservation.childName} with a duration of 
        ${reservation.hours} hours.         
        <button class="reservation__delete" id="reservation--${reservation.id}">
            Deny Reservation
        </button>
    </li>`
})


        
html += reservationList.join("")     
html += `</ul>`


return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})