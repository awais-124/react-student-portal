const sortByName = (students, setStudents) => {
  const sorted = students.slice().sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  setStudents(sorted);
};
const sortByRegistrationNo = (students, setStudents) => {
  const sorted = students.slice().sort((a, b) => {
    const regNoA = a.stdRegNumber.toLowerCase();
    const regNoB = b.stdRegNumber.toLowerCase();
    if (regNoA < regNoB) return -1;
    if (regNoA > regNoB) return 1;
    return 0;
  });
  setStudents(sorted);
};
const sortBySemester = (students, setStudents) => {
  const sorted = students.slice().sort((a, b) => a.semester - b.semester);
  setStudents(sorted);
};

export { sortByName, sortByRegistrationNo, sortBySemester };
