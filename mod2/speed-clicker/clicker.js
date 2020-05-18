const h1 = document.getElementById("click")

if (localStorage.getItem("click") == "NaN") {
    localStorage.setItem("click", 0)
} else {

    document.addEventListener("click", () => { 
        const click = parseInt(localStorage.getItem("click"))

        function addClick (click) {
            return click + 1
        }

        h1.textContent = parseInt(addClick(click))
        document.getElementsByTagName("body")[0].append(h1)

        return localStorage.setItem("click", h1.textContent)
    })
}