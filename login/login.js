// Login.js
document.getElementById("form_container").addEventListener("submit",function data(e){
    e.preventDefault();

    let enteredEmail=document.getElementById("email").value;
    let enteredPassword=document.getElementById("password").value;
    let storedData=JSON.parse(localStorage.getItem("userdata"))

    console.log(storedData);
    console.log(enteredEmail);
    console.log(enteredPassword);

    if(storedData.email === enteredEmail && storedData.password === enteredPassword)
    {
        alert("Login successfully...");
        window.location.href="../Home/home.html"
    }
    else{
        alert("Enter Valid Credentials...")
    }
    
})