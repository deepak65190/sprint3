document.querySelector("#form").addEventListener("submit", myform)

function myform() {
    
    // let go =  JSON.parse(localStorage.getItem("user")) || [] ;
    var obj = {
name : document.getElementById("name").value,
email: document.getElementById("email").value ,
address:document.getElementById("address").value,
amount:document.getElementById("amount").value
    }
   
   
localStorage.setItem("user" , JSON.stringify(obj))

}