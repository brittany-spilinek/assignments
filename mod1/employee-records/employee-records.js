const employees = []
const string = ""
function Employee (name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function() {
        console.log(name, jobTitle, salary, status)
    }
}

const Julie = new Employee ("Julie", "BadAss", 100000, "Contract")
Julie.status = "Contract"
const Brittany = new Employee ("Brittany", "Student", -15000, "Full-Time")
const Zach = new Employee ("Zach", "Web Developer", 80000, "Full-Time")

Julie.printEmployeeForm()
Brittany.printEmployeeForm()
Zach.printEmployeeForm()

employees.push(Julie, Brittany, Zach)
console.log(employees)