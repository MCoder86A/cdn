$(function(){
    if(window.innerWidth<600){
        initUI()
    }
})

function initUI(){
    var i = document.getElementById("t_img");
    $(".container_b").css({"height": i.height});
}