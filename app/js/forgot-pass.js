const btnSendCode = document.getElementById("sendcode")
const btnVeriCode = document.getElementById("vericode")
const classSendcode = document.getElementsByClassName("form__forgot")

console.log(classSendcode)

btnSendCode.addEventListener('click', () => {
    classSendcode[0].classList.remove("active")
    classSendcode[1].classList.add("active")
})
btnVeriCode.addEventListener('click', () => {
    classSendcode[1].classList.remove("active")
    classSendcode[2].classList.add("active")
})    
    // if (btnVeriCode.onclick == true){
    //     classSendcode[1].classList.remove("active")
    //     classSendcode[2].classList.add("active")
    // }
