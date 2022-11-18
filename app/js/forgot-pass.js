const btnSendCode = document.getElementById("send_code")
const btnVeriCode = document.getElementById("veri_code")
const classSendcode = document.getElementsByClassName("form__forgot")

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
