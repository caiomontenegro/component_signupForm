let fName = ''
let lName = ''
let email = ''
let password = ''
let button = document.querySelector('.js-login')
let inputs = document.querySelectorAll('.js-input')
let voids = document.querySelectorAll('.js-empty-message')


button.addEventListener('click', checkData)


for(let i = 0; i in inputs; i++) {
    inputs[i].addEventListener('blur', function() {
        clear(inputs[i], voids[i])
    })
}


function clear(inputs, voids) {
    inputs.classList.remove('js-block')
    voids.classList.remove('js-block-message')
}


function checkData(event) {
    fName = document.querySelector('.js-fName').value
    lName = document.querySelector('.js-lName').value
    email = document.querySelector('.js-email').value
    password = document.querySelector('.js-password').value

    let inputsValues = [
        fName,
        lName,
        email,
        password,
    ]    

    for (let i in inputsValues) {
        if(inputsValues[i] === '') {
            inputs[i].classList.add('js-block')
            voids[i].classList.add('js-block-message')
            event.preventDefault()
        } else {
            inputs[i].classList.remove('js-block')
            voids[i].classList.remove('js-block-message')
        }
    }
    if(checkName(fName, lName) === false) {
        event.preventDefault()
    }
    checkEmail(inputsValues[2])
    checkPassword(inputsValues[3])
}


function checkName(fName, lName) {
    if(fName.length === 1) {
        inputs[0].classList.add('js-block')
        return false
    } else if (lName.length === 1) {
        inputs[1].classList.add('js-block')
        return false
    } else {
        return true
    }
}


function checkPassword(password) {
    if(password.length < 6) {
        inputs[3].classList.add('js-block')
        return false
    } return true
}


function checkEmail(email) {
    if (email.includes('@')) {
        if (email.endsWith('.com') || email.endsWith('.com.br')) {
            inputs[2].classList.remove('js-block')
            voids[2].classList.remove('js-block-message')
        } else {
            inputs[2].classList.add('js-block')
            voids[2].classList.add('js-block-message')
        }
    } else {
        inputs[2].classList.add('js-block')
        voids[2].classList.add('js-block-message')
    }
}