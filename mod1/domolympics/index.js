const h1 = document.createElement("h1")
h1.textContent = "JavaScript Made This!!"
h1.style.fontWeight = "bold"
document.getElementById("header").appendChild(h1)

const h2 = document.createElement("h2")
h2.innerHTML = "<span class=name>Brittany</span> wrote the JavaScript"
document.getElementById("header").appendChild(h2)

const messages = document.getElementsByClassName("message")
messages[0].textContent = "To the windowwwww to the wall"
messages[1].textContent = "To my comfy bed I crawl"
messages[2].textContent = "Don't need to hang out with y'all"
messages[3].textContent = "Ahhh sleep sleep sleep"

document.getElementById("clear-button").addEventListener("click", function(){
    messages[0].textContent = ""
    messages[0].style.backgroundColor = "white"
    messages[1].textContent = ""
    messages[1].style.backgroundColor = "white"
    messages[2].textContent = ""
    messages[2].style.backgroundColor = "white"
    messages[3].textContent = ""
    messages[3].style.backgroundColor = "white"
})