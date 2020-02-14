const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')



weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()

    message1.textContent = 'Proszę czekać...'
    message2.textContent = ''
    fetch('/weather?address='+searchElement.value).then((response) => {
    response.json().then((data) => {
        if (data.error){
            message1.textContent = 'ERROR: '+data.error
            message2.textContent = ''
        }
        else{
            message1.textContent = data.location
            message2.textContent = data.forecast
        }
    })
})
})