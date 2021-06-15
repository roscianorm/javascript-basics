let students = ['Javier', 'Hilery', 'Luis', 'Esteban', 'Orlando']

function sayHi(student) {
  console.log(`Hi, ${student}!`)
}

// for (let i = 0; i < students.length; i++) {
//   sayHi(students[i])
// }

for (let student of students) {
  sayHi(student)
}
