let fName = ''
let lName = ''
let email = ''
let password = ''
let button = document.querySelector('.js-login')
let inputs = document.querySelectorAll('.js-input')



button.addEventListener('click', login)

function login(event) {
    fName = document.querySelector('.js-fName').value
    lName = document.querySelector('.js-lName').value
    email = document.querySelector('.js-email').value
    password = document.querySelector('.js-password').value

    event.preventDefault()

    let inputsValues = [
        fName,
        lName,
        email,
        password,
    ]    

    for (let i in inputsValues) {
        if(inputsValues[i] === '') {
            inputs[i].classList.add('js-block')
        } else {
            inputs[i].classList.remove('js-block')
        }
    }
}
