function onSub() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this.responseText);
        var xhhtp_res = JSON.parse(this.responseText);
        if(xhhtp_res["status"]=="success"){
            window.location = "../";
        }
    };
    var formArgs = document.forms["loginForm"];
    var userID = formArgs["userID"].value;
    var pwd = formArgs["pwd"].value;
    var args = `userID=${userID}&pwd=${pwd}`;

    xhttp.open("POST", "./lValidation.php");
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(args);

    return false;
}
