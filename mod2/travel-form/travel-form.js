const form = document.travelForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = parseInt(form.age.value)
    const gender = form.gender.value
    const destination = form.destination.value
    const diet = []

    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            diet.push(form.diet[i].value)
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDietary Restrictions: " + diet)
})