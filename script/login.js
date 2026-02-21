// console.log("login page is landing--");
document.getElementById("login-btn")
.addEventListener("click",function(){
    const mobileNumber = document.getElementById("mobile-number");
    const number=mobileNumber.value;
    // console.log(number);
    const pinNumber = document.getElementById("pin-number");
    const pin = pinNumber.value;
    if(number==="01877948007" && pin==="1234")
    {
        alert("login successfull");
        window.location.assign("/home.html")
    }
    else
    {
        alert("Try again");
        return;
    }
})