import {navbar} from "../components/navbar.js";

document.getElementById("navbarup").innerHTML=navbar();

document.getElementById("join_lyst_btn").addEventListener("click",savedata);

var userdata=JSON.parse(localStorage.getItem("usercreds"))||[];

function savedata(){

var userobj={
    email:document.getElementById("email_input").value,
    password:document.getElementById("password_input").value,
}

userdata.push(userobj);
localStorage.setItem("usercreds",JSON.stringify(userdata));
document.getElementById("email_input").value=null;
document.getElementById("password_input").value=null;
alert("Sign In Successfull");
window.location="../html_pages/index.html";
}