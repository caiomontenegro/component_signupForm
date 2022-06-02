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
    console.log('teste')
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
        checkEmail(inputsValues[2])
    }
}

function checkEmail(email) {
    if (email.includes('@')) {
        console.log('tem @')
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


