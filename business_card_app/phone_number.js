let phoneNumberInput = document.getElementById("phoneNumberInput") 

function setPhoneNumberDetails(event) {
    let value = event.currentTarget.value
    let cardValue = document.getElementById("phoneNumber")
    let error = document.getElementById('phoneNumberError')
    if(isNumberField(event)){
        cardValue.innerHTML = value
        error.innerHTML =''
        event.currentTarget.classList.remove('error')
    }
    else{
        error.innerHTML = "invalid number"
        cardValue.innerHTML = ""
        event.currentTarget.classList.add('error')
    }

 }

phoneNumberInput.addEventListener("input", function (event) { setPhoneNumberDetails(event) })

 function isNumberField(event){
    let value = event.currentTarget.value
    if(isNaN(value)){
        console.log("Invalid Number")
        return false
    }
    else{
        return true
    }
}
