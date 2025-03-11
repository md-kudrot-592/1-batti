var a = document.querySelector(".clock")
var b = document.querySelector(".btn")

var c = 0

b.addEventListener("click", function(){
    if(c == 0){
        a.style.backgroundColor = "yellow"
        c = 1
    }
    else{
        a.style.backgroundColor = "transparent"
        c = 0
    }

})
