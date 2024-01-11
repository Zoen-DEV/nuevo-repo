const array = [
  {
    name: "Pedro",
    age: 25,
  },
  {
    name: "Ricardo",
    age: 25,
  },
  {
    name: "Pedro",
    age: 25,
  },
  {
    name: "Pedro",
    age: 25,
  },
  {
    name: "Pedro",
    age: 25,
  },
  {
    name: "Pedro",
    age: 25,
  },
  {
    name: "Ricardo",
    age: 25,
  },
];


const newArray = array.filter(item => item.name === "Ricardo")

console.log(newArray)