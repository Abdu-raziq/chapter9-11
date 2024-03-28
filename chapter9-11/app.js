// // Question no 1
// let city_name=prompt("Enter your city name");
// if(city_name==="karachi"){
//     Swal.fire("Welcome the city of light");
// }
// else{
//     Swal.fire(`Welcome to ${city_name}`);
// }

// // Question no 2
// let gender=prompt("Enter your gender");
// if(gender==="male"){
//     Swal.fire("Good morning sir!!!");
// }
// else if(gender==="female"){
//     Swal.fire("Good morning maam!!!");
// }
// else{
//     Swal.fire("Invalid!!!");
// }

// // Question no 3
// let color=prompt("Enter traffic signal color");
// if(color==="red"){
//     Swal.fire("Must stop!!!");
// }
// else if(color==="yellow"){
//     Swal.fire("Ready to move!!!");
// }
// else if(color==="green"){
//     Swal.fire("Move now!!!");
// }
// else{
//     Swal.fire("Invalid!!!");
// }

// // Question no 4
// let fuel=+prompt("Enter remaining fuel in liters");
// if(fuel < 0.25){
//     Swal.fire("Please refill the fuel in your car");
// }
// else if(fuel > 0.25){
// Swal.fire("Fuel is full!!!");
// }
// else{
//     Swal.fire("Invalid!!!");
// }

// // Question no 5 

// // part a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // part b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // part c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // part d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // part e
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// // part f
// if("car" < "cat") {
// alert("car is smaller than cat");
// }

// Question no 6
let total_marks=+prompt("Enter total marks");
let obtain_marks=+prompt("Enter obtained marks");
let percentage =obtain_marks/total_marks*100;
document.write("<h1>Marks Sheet</h1>");
document.write(`Total marks : ${total_marks} <br>`); 
document.write(`Marks obtained: ${obtain_marks} <br>`);
document.write(`Percentage : ${percentage}% <br>`);  
if(percentage>=80){
    document.write(`Grade : A-one <br>`);
    document.write(`Remarks : Excellent <br>`);
}
else if(percentage>=70){
    document.write(`Grade : A <br>`);
    document.write(`Remarks : Good <br>`);
}
else if(percentage>=60){
    document.write(`Grade : B <br>`);
    document.write(`Remarks : You need to improve <br>`);
}
else if(percentage<60){
    document.write(`Grade : Fail <br>`);
    document.write(`Remarks : Sorry!!! <br>`);
}



