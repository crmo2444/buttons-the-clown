import { ButtonsTheClown } from "./ButtonsTheClown.js"
import { fetchRequests } from "./dataAccess.js"
import { ServiceForm } from "./ServiceForm.js"

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchRequests().then(() =>
    mainContainer.innerHTML = ButtonsTheClown()

    )
    

}

render()
