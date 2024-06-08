// Object literals: - used to store keyed collections and collections entities
// propert =>(key,value) pair  (Objects are collections of properties)
const student={
    name:"sameer",
    age:23,
    marks:87,
    city:"Vellore"
};
// 1) Accessing value from object (Get value) : - student["name"] or student.name
// 2) JS automatically converts object keys to strings
// 3) Add/Update value in object :-
//  a) Update : - student.city="Mumbai";
//  b) Add : - student.gender="Male";
// 4) Nested object : -(object of objects)
const classInfo ={
    Aman:{
        Grade:"A+",
        City:"Delhi"
    },
    Sameer:{
        Grade:"A",
        City:"Kolkata"
    },
    Sneha:{
        Grade:"O",
        City:"Mumbai",
    }
};
// 5) Array of objects : -
// For accessing elements : - Class[0], Class[0].Name, Class[1].City etc
const Class=[
    {
        Name:"Sameer",
        City:"Kolkata",
    },
    {
        Name:"Sneha",
        City:"Mumbai",
    },
    {
        Name:"Aman",
        City:"Delhi",
    }
];
// 6) Math object : - a) Properties -> Math.PI, Math.E etc b) Methods -> Math.abs(n),
// Math.pow(a,b), Math.ceil(a), Math.floor(a), Math.random() etc
// To get random integer between 1 to 10 is : - Math.floor(Math.random()*10)+1;