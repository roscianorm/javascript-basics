let students = ['Javier', 'Hilery', 'Luis', 'Esteban', 'Orlando']

function sayHi(student) {
  console.log(`Hi, ${student}!`)
}

// The for loop repeats until a specified condition evaluates to false
// for (let i = 0; i < students.length; i++) {
//   sayHi(students[i])
// }

// The for...of loop cycles through the values of an iterable object(Arrays, Maps and others)
for (let student of students) {
  sayHi(student)
}
