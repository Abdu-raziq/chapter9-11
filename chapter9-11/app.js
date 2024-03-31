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
// let total_marks=+prompt("Enter total marks");
// let obtain_marks=+prompt("Enter obtained marks");
// let percentage =obtain_marks/total_marks*100;
// document.write("<h1>Marks Sheet</h1>");
// document.write(`Total marks : ${total_marks} <br>`); 
// document.write(`Marks obtained: ${obtain_marks} <br>`);
// document.write(`Percentage : ${percentage}% <br>`);  
// if(percentage>=80){
//     document.write(`Grade : A-one <br>`);
//     document.write(`Remarks : Excellent <br>`);
// }
// else if(percentage>=70){
//     document.write(`Grade : A <br>`);
//     document.write(`Remarks : Good <br>`);
// }
// else if(percentage>=60){
//     document.write(`Grade : B <br>`);
//     document.write(`Remarks : You need to improve <br>`);
// }
// else if(percentage<60){
//     document.write(`Grade : Fail <br>`);
//     document.write(`Remarks : Sorry!!! <br>`);
// }
// else{
//     Swal.fire("Invalid!!!");
// }

// Question no 7
// let secret_no=8;
// let guess=+prompt("Guess the secret number");
// if(guess===8){
//     Swal.fire("Bingo! Correct answer");
// }
// else if(guess === 8+1){
//     Swal.fire("Close enough to the correct answer");
// }
// else{
//     Swal.fire("No match!!!");
// }

// Question no 8
// let number = +prompt("Enter the number:");
// if(number % 3 === 0){
//     Swal.fire("The number is divisible by 3!!!");
// }
// else{
//     Swal.fire("The number is not divisible by 3!!!");
// }

// Question no 9
// let even_odd=+prompt("Enter the number");
// if(even_odd % 2===0){
//     Swal.fire(`${even_odd} is even number!!!`);
// }
// else{
//     Swal.fire(`${even_odd} is odd number!!!`);
// }

// Question no 10
// let temperature=+prompt("Enter the temperature");
// if(temperature>40){
//     Swal.fire("Its too hot outside !!!");
// }
// else if(temperature>30){
//     Swal.fire("Today wheather is normal !!!");
// }
// else if(temperature>20){
//     Swal.fire("Today's wheather is cool !!!");
// }
// else if(temperature>10){
//     Swal.fire("OMG!!! Today's wheather is so cool !!!");
// }
// else if(temperature<10){
//     Swal.fire(`OMG!!! ${temperature}C<sup>0</sup>  is so cool !!!`);
// }
// else{
//     Swal.fire("Invalid!!!");
// }

let user_input=+prompt("Calculator \n\n 1.+ \n 2.- \n 3.* \n 4./ \n 5.% \n\n Enter your choice");
if(user_input ===1){
    let add1=+prompt("Enter first number");
    let add2=+prompt("Enter second number");
    let add = add1 + add2 ;
    Swal.fire(`Addition of ${add1} + ${add2} = ${add}`);
}
else if(user_input ===2){
    let sub1=+prompt("Enter first number");
    let sub2=+prompt("Enter second number");
    let sub = sub1 - sub2 ;
    Swal.fire(`Subtraction of ${sub1} - ${sub2} = ${sub}`);
}
else if(user_input ===3){
    let mul1=+prompt("Enter first number");
    let mul2=+prompt("Enter second number");
    let mul = mul1 * mul2 ;
    Swal.fire(`Multiplication of ${mul1} * ${mul2} = ${mul}`);
}
else if(user_input ===4){
    let div1=+prompt("Enter first number");
    let div2=+prompt("Enter second number");
    let div = div1 / div2 ;
    Swal.fire(`Division of ${div1} / ${div2} = ${div}`);
}
else if(user_input ===5){
    let rem1=+prompt("Enter first number");
    let rem2=+prompt("Enter second number");
    let rem = rem1 % rem2 ;
    Swal.fire(`Reminder of ${rem1} / ${rem2} = ${rem}`);
}
else{
    Swal.fire("Invalid please try again!!!");
}




