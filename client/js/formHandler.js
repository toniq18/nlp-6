function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/api')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}



const userInput = document.getElementById("name").innerText

const clientsidepost ={
    method: 'POST',
    credentials: 'same-origin',
    headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInput)
};
fetch('/api', clientsidepost)



export { handleSubmit }
