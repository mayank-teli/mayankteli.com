function SendMail(){
    var parms ={
        name : document.getElementById("name").Value,
        email : document.getElementById("email").Value,
        message : document.getElementById("message").Value
    }

    emailjs.send("service_port","template_frj8mbc",parms).then(alert("Email Sent!!"))
}