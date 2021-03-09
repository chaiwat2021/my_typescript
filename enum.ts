enum Grade {A, B, C, D, F};

let student1 = Grade.A;
let student2 = Grade.B;

console.log(Grade[student1]);
console.log(Grade[student2]);

//student2  = Grade.P; error because P is not member of enum Grade.
//student2 = "r"       error because student2 assign with enum Grade.