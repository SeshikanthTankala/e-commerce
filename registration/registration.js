// Registration.js
document.getElementById("form_container").addEventListener("submit",function data(e){
    e.preventDefault();
    // let userData ={};

    let userName=document.getElementById("name").value;
    let userEmail=document.getElementById("email").value;
    let userPassword=document.getElementById("password").value;
    let userMobile=document.getElementById("mobile").value;
    let errorEmailMsg = document.getElementById("error_mail");
    let errorPasswordMsg = document.getElementById("error_password");

    // document.querySelectorAll(".user_inputs").forEach((element) => {
    //     userData[element.id] = element.value;
    // });

    // console.log(userName);
    // console.log(userEmail);
    // console.log(userAddress);
    // console.log(userPassword);
    // console.log(userMobile);

    //regex code
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(!emailPattern.test(userEmail)){
        errorEmailMsg.textContent="Invalid Mail,please enter valid mail.";
        return;
    }
  //let passwordPattern = /(.?=*[A-Z])(.?=*[a-z])(.?=*[0-9])(.?=*[!@#$%^&]).{8,}$/; //regex code for password (* means atleast 1 should be there)
    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}$/
    if(!passwordPattern.test(userPassword)){
        errorPasswordMsg.textContent="Invalid password,please enter valid password.";
        return;
    }
    let userData = {
        name : userName,
        email : userEmail,
        password : userPassword,
        Mobile : userMobile
    };
    localStorage.setItem("userdata",JSON.stringify(userData));
    alert("Registered successfully...")
    window.location.href="../login/login.html"
    
    console.log(userData);
})


// let arr = window.document.querySelectorAll(".user_inputs").values;
// console.log(arr);
// let [userName,userEmail,userAddress,userPassword,userMobile]=arr;