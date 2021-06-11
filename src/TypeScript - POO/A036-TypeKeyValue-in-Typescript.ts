type School = {
  classroom: string;
  name: string;
  year: number;
};

type ClassTI = {
  classroom: School['classroom'];
  nameCourse: School['name'];
  year: School['year'];
  note: number;
};

const courseTI: ClassTI = {
  classroom: 'T34',
  nameCourse: 'Course of Back End',
  year: 2021,
  note: 8,
};

console.log(courseTI);
