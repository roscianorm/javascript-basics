let students = ['Javier', 'Hilery', 'Luis', 'Esteban', 'Orlando']

function sayHi(student) {
  console.log(`Hi, ${student}!`)
}

// A while loop executes its statements as long as a specified condition evaluates to true.
while (students.length > 0) {
  console.log(students)
  let student = students.shift()
  sayHi(student)
}

// The while loop it's like keep cooking the chicken while it's still raw, we don't really know when it will be cooked we just know it'll happen.
