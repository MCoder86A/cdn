// import "animejs"

function animateTeacher(){
    var teacher_i = document.getElementById("t_img");
    var desk_i = document.getElementById("d_img");
    anime({
        targets: teacher_i,
        translateX : 150,
        opacity: .4,
        direction: 'reverse',
        easing: 'linear'
    })
    anime({
        targets: desk_i,
        opacity: .0,
        direction: 'reverse',
        easing: 'linear'
    })
}
function animateIntro(){
    anime({
        targets: ".intro",
        translateX: -15,
        opacity: 0.1,
        direction: "reverse",
        easing: 'linear'
    })
    anime({
        targets: ".c_name",
        translateX: 40,
        direction: "reverse",
        easing: 'linear'
    })
    anime({
        targets: ".sign_in_out",
        scale: [0.9, 1],
        opacity: [0.0, 1],
        easing: 'linear',
        delay: 1000
    })
}
function loginHover(context){
    anime({
        targets: context,
        translateX:5,
    })
}
function loginUnHover(context) {
    anime({
        targets: context,
        translateX: 0,
    })
}
$(document).ready(function(){
    if(window.innerWidth>600){
        animateTeacher()
    }
    animateIntro()
})