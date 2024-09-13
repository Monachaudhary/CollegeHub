window.onload = function sendmail(){
    var params ={
      
        message : document.getElementById("message").value,
        email_id : document.getElementById("email").value,
        services : document.getElementById("services").value,
        name : document.getElementById("name").value,
    };
    emailjs.send("service_b52pvoc","template_lhu5kvc", params)
    .then(
       function(res){
        alert("success"+ res.status);
       }
    )
    .catch((err)=> console.log("there is error"));
}