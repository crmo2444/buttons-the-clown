import { Reservations } from "./Reservations.js";
import { ServiceForm } from "./ServiceForm.js";

export const ButtonsTheClown = () => {
    return `
    <h1>Button's The Clown</h1>
        <section class="serviceForm">
        ${ServiceForm()}
        </section>

        <section class="serviceRequests">
    <h2>Party Requests</h2>
        ${Reservations()}
        </section>
`
}

