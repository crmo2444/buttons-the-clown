//responsible for getting list of reservations from application state

import { deleteReservation, getClowns, getCompletions, getRequests, saveCompletion } from "./dataAccess.js";

//use map to generate and display HTML for a list of these

export const Reservations = () => {
    let reservations = getRequests()
    let clowns = getClowns()
    let completions = getCompletions()

    let html = "<ul>"

    let reservationList = reservations.map(reservation => { 
        const foundCompletion = completions.find((completion) => {
            return completion.reservationId === reservation.id
        })
        if (typeof foundCompletion !== "undefined") {
            html += `   <li style="background-color:lightblue;">
            Party at ${reservation.address} on 
            ${reservation.date} for ${reservation.childName} with a duration of 
            ${reservation.hours} hours. Completed by `
            if (foundCompletion.clownId === 1) {
                html += `Buttons!`
            }
            else {
                html += `Lollipop!`
            }
            html += `<button class="reservation__delete"
                    id="reservation--${reservation.id}">
                Deny Reservation
            </button>
        </li>`
        }
        else {
        return `   <li>Party at ${reservation.address} on 
        ${reservation.date} for ${reservation.childName} with a duration of 
        ${reservation.hours} hours. 
        <select class="clowns" id="clowns">
            <option value="">Choose</option>
                ${
                    clowns.map(
                    clown => {
                    return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                }).join("")
                }
        </select>        
        <button class="reservation__delete" id="reservation--${reservation.id}">
            Deny Reservation
        </button>
    </li>`
            }
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

//listens for when a clown is chosen for completion of reservation
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")

            let newReservationId = parseInt(reservationId)
            let newClownId = parseInt(clownId)
  
            const completion = {
                reservationId: newReservationId,
                clownId: newClownId,
                date_created: Date.now()
             }

             saveCompletion(completion)

        }
    }
)