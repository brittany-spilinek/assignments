const square = document.querySelector(".square")

square.addEventListener("mouseenter", function(){
    square.style.backgroundColor = "blue"
})

square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})

document.body.addEventListener("wheel", function(){
    square.style.backgroundColor = "orange"
})

document.body.addEventListener("keypress", function(event){
    switch (event.code) {
        case "KeyB":
            square.style.backgroundColor = "blue"
            break;
        case "KeyR":
            square.style.backgroundColor = "red"
            break;
        case "KeyY":
            square.style.backgroundColor = "yellow"
            break;
        case "KeyG":
            square.style.backgroundColor = "green"
            break;
        case "KeyO":
            square.style.backgroundColor = "orange"
            break;
    }
})