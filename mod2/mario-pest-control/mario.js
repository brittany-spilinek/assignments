const form = document.pestForm

form.addEventListener("keyup", function () {
    const goomba = form.goomba.value
    const bob = form.bob.value
    const cheep = form.cheep.value
    const total = document.getElementById("total")

    function pestTotal (goomba, bob, cheep) {
        let goombaTotal = goomba * 5
        let bobTotal = bob * 7
        let cheepTotal = cheep * 11
        return goombaTotal + bobTotal + cheepTotal
    }

    total.innerHTML = "Total: " + pestTotal(goomba, bob, cheep) + " coins"
    document.pestForm.appendChild(total)
})




