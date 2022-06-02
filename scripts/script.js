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
            let voidMessage = voids[i]
            inputs[i].classList.add('js-block')
            voids[i].classList.add('js-block-message')
            voidMessage.innerHTML = 'This field must be filled'
            event.preventDefault()
        } else {
            inputs[i].classList.remove('js-block')
            voids[i].classList.remove('js-block-message')
        }
    }

    if(checkName(fName, lName) === false) {
        event.preventDefault()
    }
    checkEmail(email)
    checkPassword(password)
}

function checkPassword(password) {
    const shortPassword = voids[3]
    if(password.length < 6 && password.length >= 1) {
        inputs[3].classList.add('js-block')
        voids[3].classList.add('js-block-message')
        shortPassword.innerHTML = 'The password must contain at least 6 digits'
        return false
    } return true
}

function checkName(fName, lName) {
    const fShortName = voids[0]
    const lShortName = voids[1]
    if(fName.length === 1) {
        inputs[0].classList.add('js-block')
        voids[0].classList.add('js-block-message')
        fShortName.innerHTML = 'The Name is too short'
        return false
    } else if (lName.length === 1) {
        inputs[1].classList.add('js-block')
        voids[1].classList.add('js-block-message')
        lShortName.innerHTML = 'The Name is too short'
        return false
    } else {
        return true
    }
}




function checkEmail(email) {
    let emailMessage = voids[2]
    let strEmail = email.split('')
    let reverseEmail = strEmail.reverse().join('')
    if (email.includes('@')) {
        if (email.endsWith('.com') || email.endsWith('.com.br')) {
            inputs[2].classList.remove('js-block')
            voids[2].classList.remove('js-block-message')
            if(reverseEmail.indexOf('@') === 7 || reverseEmail.indexOf('@') === 4) {
                inputs[2].classList.add('js-block')
                emailMessage.innerHTML = 'Looks like this is not an e-mail'
            }
        } else {
            inputs[2].classList.add('js-block')
            voids[2].classList.add('js-block-message')
            emailMessage.innerHTML = 'Looks like this is not an e-mail'
        }
    } else {
        inputs[2].classList.add('js-block')
        voids[2].classList.add('js-block-message')
        emailMessage.innerHTML = 'Looks like this is not an e-mail'
    }
}