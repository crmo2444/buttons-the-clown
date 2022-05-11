const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
            
                applicationState.requests = serviceRequests
            }
        )
}

const applicationState = {
    requests: []
}

export const getRequests = () => {
    return applicationState.requests.map(requests => ({...requests}))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })

}
