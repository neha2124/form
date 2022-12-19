console.log("hello")
let id = (id) =>  document.getElementById(id)
   

let classes = (classes) => document.getElementsByClassName(classes)
   

let users = id("username"),
    email= id("email"),
    password = id("password"),
    form = id("form"),

    error = classes("error")
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    console.log(error)

    form.addEventListener("submit", (e) =>{
   e.preventDefault();
   validName();
   validPassword();
   validEmail();
    })


let validName = () => {
    if(users.value.trim() === ""){
        error[0].innerHTML="user name cannot be blank "
        error[0].style.color="red"
        failureIcon[0].style.opacity= "1"
        users.classList.add("red")
     }
     else{ 
     
         error[0].innerHTML ="" 
         failureIcon[0].style.opacity ='0'
         successIcon[0].style.opacity = '1'
        //  users.classList.remove("red")
         users.classList.add("green")
     } 
    }
     
let validMail = () => {

}
let validPassword = () => {
    if(password.value.length < 8){
        error[2].innerHTML =" make sure password is more than 8 character "
        error[2].style.color="red"
        failureIcon[2].style.opacity= "1"
        password.classList.add("red")
    }else{
        error[2].innerHTML=""
        failureIcon[2].style.opacity ='0'
        successIcon[2].style.opacity = '1'
       //  users.classList.remove("red")
        password.classList.add("green")
    }
}
let validEmail = () => {
    let re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(re.test(email.value)){
        error[1].innerHTML = "";
        failureIcon[1].style.opacity ='0'
        successIcon[1].style.opacity = '1'
        email.classList.add("green")

    }else{
        error[1].innerHTML= "Email is not valid"
        error[1].style.color="red"
        failureIcon[1].style.opacity ='1'
        successIcon[1].style.opacity = '0'
        email.classList.add("red")

    }
}