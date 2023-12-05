import './App.css';

type Student = {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  grades: Array<string | number | undefined>;
};

function App() {
  const students: Student[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 24,
      grades: [1, 2, 3, undefined]
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 22,
      grades: ['1', 'B', undefined, '1']
    },
    {
      id: 3,
      firstName: 'Billy',
      lastName: 'Bob',
      age: 18,
      grades: ['C', 4, undefined, 'B']
    }
  ];

  function getStudentWithId(id: number): Student | undefined {
    return students.find(student => student.id === id);
  }

  function printStudentDetails(student: Student) {
    let num = 0;
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    num = num + student.firstName.length + student.lastName.length + 2 + 4;
    console.log('='.repeat(num));

    const gradesString = student.grades.map(grade => grade === undefined ? '*' : grade).join(',');
    console.log(`Grades: ${gradesString}`);
  }

  function printStudent(id: number) {
    const student = getStudentWithId(id);
    if (student) {
      printStudentDetails(student);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }

  function printAllStudents() {
    students.forEach(printStudentDetails);
  }

  // Beispielaufrufe
  printStudent(1);
  printAllStudents();

  return (
      <>
      <pre>

      </pre>
      </>
  );
}

export default App;
