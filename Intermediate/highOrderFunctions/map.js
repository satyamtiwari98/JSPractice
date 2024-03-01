let nums = [5, 3, 7, 9, 232, 56, 675, 32, 12];

let squareNum = nums.map((num) => num * num);
console.log(squareNum);

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

let fullname = persons.map((name) => name.firstname + " " + name.lastname);

console.log(fullname);
fullname.map((name) => console.log(name));
