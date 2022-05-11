import { ButtonsTheClown } from "./ButtonsTheClown.js"
import { fetchClowns, fetchCompletions, fetchRequests } from "./dataAccess.js"
import { ServiceForm } from "./ServiceForm.js"

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchRequests().then(() => fetchClowns())
    .then(() => fetchCompletions()).then(
        () => {
    mainContainer.innerHTML = ButtonsTheClown()
        }
    )
    

}

render()
