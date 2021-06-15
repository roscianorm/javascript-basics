let students = ['Javier', 'Hilery', 'Luis', 'Esteban', 'Orlando']

function sayHi(student) {
  console.log(`Hi, ${student}!`)
}

// A while statement executes its statements as long as a specified condition evaluates to true.
while (students.length > 0) {
  console.log(students)
  let student = students.shift()
  sayHi(student)
}

// It is like saying keep cooking the chicken while it is still raw, we don't really know when it will be cooked we just know that when it is cooked we will stop cooking it.
