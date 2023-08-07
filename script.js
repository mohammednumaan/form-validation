const form = document.querySelector('form')

const email = document.querySelector('#email')
const emailError = document.querySelector('.error')

const country = document.querySelector('#country')
const countryError = document.querySelector('.country-error')

const zipcode = document.querySelector('#zipcode')
const zipcodeError = document.querySelector('.zipcode-error')
const zipcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/

const password = document.querySelector('#password')
const passwordError = document.querySelector('.password-error')

const confirmPassword = document.querySelector('#password-confirm')
const confirmPasswordError = document.querySelector('.password-confirm-error')

// form 

form.addEventListener('submit', (event) => {

    if(!email.validity.valid){
        showEmailError()
    }
    else if (!country.validity.valid){
        showCountryError()
    }
    else if (!zipcode.validity.valid){
        showZipcodeError()
    }
    else if (!password.validity.valid){
        showPasswordError()
    }
    else if (!confirmPassword.validity.valid){
        showConfirmPassword()

    } 
    else{
        console.log('High Five! ✋')
    }
    event.preventDefault()
})


// email

email.addEventListener('input', () => {

    if (email.validity.valid){
        emailError.textContent = ''
        emailError.className = 'error'
    }
    else{
        showEmailError()
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
    } 
    else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
    } 
    else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
}

// country

country.addEventListener('input', () => {
    if (!country.validity.valid){
        showCountryError()
    }
    else{
        countryError.textContent = ''
        countryError.className = 'error'
    }
})

function showCountryError(){
    if (country.validity.valueMissing){
        countryError.textContent = "You need to enter a Country."
        countryError.className = 'error active'
    }
}

// zipcode

zipcode.addEventListener('input', () => {

    if(!zipcodeRegex.test(zipcode.value)){
        zipcodeError.textContent = "You need to enter a valid Zipcode."
        zipcodeError.className = 'error active'
        zipcode.style.backgroundColor = '#fdd'
        
    }
    else if (zipcode.validity.valueMissing){
        showZipcodeError()

    }
    else{
        zipcodeError.textContent = ''
        zipcodeError.className = 'error'
    }
})

function showZipcodeError(){
    
    zipcodeError.textContent = "You need to enter a zipcode.";   
    zipcodeError.className = 'error active'
}

// password

password.addEventListener('input', () => {

    if (!password.validity.valid){
        showPasswordError()
    }
    else{
        passwordError.textContent = ''
        passwordError.className = 'error'
    }
})

function showPasswordError(){
    if (password.validity.valueMissing){
        passwordError.textContent = "You need to enter a password."
        passwordError.className = 'error active'
    }
    else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
        passwordError.className = 'error active'
    }
}


// confirm password

confirmPassword.addEventListener('input', () => {

    if (!confirmPassword.validity.valid){
        showConfirmPassword()
    }
    else{
        confirmPasswordError.textContent = ''
        confirmPasswordError.className = 'error'
        confirmPassword.style.backgroundColor = 'lightseagreen'
    }
})

function showConfirmPassword(){

    if (confirmPassword.validity.valueMissing){
        confirmPasswordError.textContent = "You need to enter a password."
        confirmPasswordError.className = ('error active')
    }
    else if (confirmPassword.value !== password.value){
        confirmPasswordError.textContent = `Passwords Don't Match! Please enter valid password.`;
        confirmPasswordError.className = 'error active'
        confirmPassword.style.backgroundColor = '#fdd'
    }
}




