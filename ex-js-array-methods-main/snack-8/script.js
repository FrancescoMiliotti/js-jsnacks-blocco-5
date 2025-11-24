const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];



const student = students.find(element => {

  if (element.name == "Marco Lanci")
    console.log("la classe di Marco Lanci è :" , element.class);

});





/*for (let i = 0; i < students.length; i++) {
  const student = students[i];

  console.log(student);

  if (student.name == "Marco Lanci")
    console.log(student.class);
  
}*/

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: 3c