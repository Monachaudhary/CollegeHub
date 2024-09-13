document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const hideSidebarButton = document.querySelector('.sidebar a'); // Assuming the close button is a link in sidebar

    // Show sidebar
    function showSidebar() {
        sidebar.style.display = 'block';
    }

    // Hide sidebar
    function hideSidebar() {
        sidebar.style.display = 'none';
        
    }

    // Event listeners
    menuButton.addEventListener('click', showSidebar);
    hideSidebarButton.addEventListener('click', hideSidebar);
});




window.onload = function sendmail(){
    var params ={
      
        message : document.getElementById("message").value,
        email_id : document.getElementById("email").value,
        services : document.getElementById("services").value,
        name : document.getElementById("name").value,
    };
    emailjs.send("service_b52pvoc","template_lhu5kvc", params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("message").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("services").value = "";
            console.log(res);
            alert("your message has been sent successfully")
        }
    )
    .catch((err)=> console.log("there is error"));
}
    
    
   

