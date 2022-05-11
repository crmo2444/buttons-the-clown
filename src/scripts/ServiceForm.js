import { sendRequest } from "./dataAccess.js"


export const ServiceForm = () => {
    let html = `<div class="field">
    <label class="label" for="parentName">Parent Name</label>
    <input type="text" name="parentName" class="input" />
</div>
<div class="field">
    <label class="label" for="childName">Child Name</label>
    <input type="text" name="childName" class="input" />
</div>
<div class="field">
    <label class="label" for="attendees">Number Attending</label>
    <input type="number" name="attendees" class="input" />
</div>
<div class="field">
    <label class="label" for="address">Location</label>
    <input type="text" name="address" class="input" />
</div>
<div class="field">
    <label class="label" for="serviceDate">Date</label>
    <input type="date" name="serviceDate" class="input" />
</div>
<div class="field">
    <label class="label" for="timeLength">Number of Hours</label>
    <input type="number" name="timeLength" class="input" />
</div>

<button class="button" id="submitRequest">Submit Request</button>
`

    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParent = document.querySelector("input[name='parentName']").value
        const userChild = document.querySelector("input[name='childName']").value
        const userAttendees = document.querySelector("input[name='attendees']").value
        const userLocation = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userTime = document.querySelector("input[name='timeLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParent,
            childName: userChild,
            attendees: userAttendees,
            address: userLocation,
            date: userDate,
            hours: userTime
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})