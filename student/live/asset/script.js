var lastClaim = null;

function show_claimSuccess(){
    var succ_cont = document.getElementById("succ_cont");

    succ_cont.style.display = "flex";
    
    var t = anime.timeline({
        duration: 1500,
        delay: 200,
      });
    t.add({
        targets: '#success_msg',
        translateY: [100,0],
        scale : [0.1, 1],
    })
    .add({
        targets: '#success_msg',
        translateY: '-=25%',
        duration: 100,
        easing: 'linear',
    })
    anime({
        targets: '#msg',
        opacity : [0, 1],
        easing: 'linear',
        duration: 500,
        delay : 1500,
    })
}
function show_otpBox() {
    var otpWin = document.getElementById("otpcontainer");
    otpWin.style.display = "flex";
    anime({
        targets: "#otp_window",
        scale: [0.85, 1],
        translateY: '-=4%',
        duration: 500,
    })
}
function hide_otpBox() {
    var otpWin = document.getElementById("otpcontainer");
    anime({
        targets: "#otp_window",
        scale: [1, 0.8],
        duration: 200,
        loopComplete: function(anim) {
            otpWin.style.display = "none";
        }
    })
}
function rollClaim(sid, std, sub){
    if(lastClaim!=null && (Date.now()-lastClaim)/1000<10){
        alert("You are requesting too frequently!");
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        console.log(this.responseText);
        var xhhtp_res = JSON.parse(this.responseText);
        if (xhhtp_res["status"] == "SUCCESS") {
            console.log("succ");
            show_otpBox();
        }
        if (xhhtp_res["status"] == "TOOFREQ") {
            console.log("tofreq");
        }
    };
    var status = "CLAIM";
    var args = `sid=${sid}&std=${std}&sub=${sub}&status=${status}`;

    xhttp.open("POST", "../claimRoll.php");
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(args);
    lastClaim = Date.now();
}

function otpSubmit() {
    var otp = document.getElementById("otp").value;
    var claimCont = document.getElementById("container");
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        hide_otpBox();
        console.log(this.responseText);
        var xhhtp_res = JSON.parse(this.responseText);
        if (xhhtp_res["STATUS"] == "SUCCESS") {
            console.log("succs");
            claimCont.style.display = "none";
            
            show_claimSuccess();
        }
        if (xhhtp_res["STATUS"] == "TOOFREQ") {
            console.log("tofreq");
        }
    };
    var args = `OTP=${otp}&SUB=${sub}`;

    xhttp.open("POST", "../otpSubmit.php");
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(args);
}