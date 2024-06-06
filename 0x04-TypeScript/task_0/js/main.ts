interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Joy",
	lastName: "Molefe",
	age: 34,
	location: "Pretoria"
};

const student2: Student = {
        firstName: "Mbali",
        lastName: "Morakwi",
        age: 25,
        location: "Upington"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "blue";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const name = document.createElement('td');
  const location = document.createElement('td');

  name.textContent = student.firstName;
  location.textContent = student.location;

  name.style.border = "1px solid pink";
  location.style.border = "1px solid pink";
  name.style.padding = "5px";
  location.style.padding = "5px";

  row.appendChild(name);
  row.appendChild(location);
  tbody.appendChild(row);
});

document.body.appendChild(table);
