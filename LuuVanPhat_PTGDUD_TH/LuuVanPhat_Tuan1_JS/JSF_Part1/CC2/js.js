var massMark = 95;
var heightMark = 1.88;
 
var massJohn = 85;
var heightJohn = 1.76;

// var massMark = 78;
// var heightMark = 1.69;
 
// var massJohn = 92;
// var heightJohn = 1.95;

var BMIMark = (massMark/(heightMark*heightMark))
var BMIJohn = (massJohn/(heightJohn*heightJohn))


console.log("BMI Mark: " + BMIMark);
console.log("BMI John: " + BMIJohn);

var markHighterBMI
if (BMIMark > BMIJohn) {
    console.log(markHighterBMI = "Mark co BMI cao hon John"); 
} else if (BMIMark < BMIJohn) {
    console.log(markHighterBMI = "John co BMI cao hon Marrk"); 
} else {
    console.log(markHighterBMI = "Mark co BMI bang John"); 
}

var markHighterBMI1
if (BMIMark > BMIJohn) {
    console.log(markHighterBMI1 = "Mark ( " + BMIMark + " ) co BMI cao hon John ( " + BMIJohn + " )"); 
} else if (BMIMark < BMIJohn) {
    console.log(markHighterBMI1 = "Mark ( " + BMIMark + " ) co BMI thap hon John ( " + BMIJohn + " )"); 
} else {
    console.log(markHighterBMI1 = "Mark co BMI bang John"); 
}


// var markHighterBMI = BMIMark > BMIJohn
// console.log("Mark co BMI cao hon John hay khong ?  " + markHighterBMI)
