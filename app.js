const arr = [5, 7, 2, 3, 1, 6]

// function double(x){
//     return x * 2;
// }

// function tripple(x){
//     return x * 3;
// }

// function binary(x){
//     return x.toString(2);
// }


// const output = arr.map( function binary(x){ return x.toString(2)})
// const output = arr.map(binary=(x)=>{ return x.toString(2)})
// const output = arr.map(binary=(x)=>x.toString(2))
// const output = arr.map((x)=>x.toString(2))

// odd value
// function isOdd(x){
//     return x %2;
// }

// even Number
// function isEven(x){
//     return x %2 == 0;
// }

// function isGreaterThen(x){
//     return x > 4
// } 

// filter

// const output = arr.filter(isGreaterThen)
// console.log(output);

// =====================================================================================

// Reduce
// sum basic function
// function findsum (arr){
//     let sum = 0;
//     for (let i = 0 ; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findsum(arr));

// sum using reduce function
// const output = arr.reduce(function(acc,curr){
//  return acc = acc + curr;
// }, 0)// 0 is initial number



// max basic function
// function findmax (arr){
//     let max = 0;
//     for (let i = 0 ; i < arr.length; i++){
//        if(arr[i]> max)
//         max = arr[i];
//     }
//     return max;
// }
// console.log(findmax(arr));

// // sum using reduce function
// const output = arr.reduce(function(max,curr){
//     if(curr>max){
//         max = curr;
//     }
//  return max;
// }, 0)// 0 is initial number
// console.log(output);

// ============================================================================================

// Lets work on real world examples
const users = [
    { firstName: "Akhil", lastname: "Belanekar", age: 25 },
    { firstName: "Sunil", lastname: "Choshik", age: 30 },
    { firstName: "Dhananjay", lastname: "Gawli", age: 40 },
    { firstName: "Ray", lastname: "Koh", age: 30 },
    { firstName: "Umesh", lastname: "Chawda", age: 30 }
]
// list of all names

// const output = users.map((x)=>x.firstName +" "+ x.lastname+" " +x.age);
// console.log(output);

// get the age (how many people are of age 40 and how many are of age 30)

// const output = users.reduce(function(acc,curr){
//     if (acc[curr.age]){
//         acc[curr.age]= ++acc[curr.age]
//     }
//     else{
//         acc[curr.age]=1
//     }
//     return acc;
// },{});
// console.log(output);


//  first name of all the people whose age is less then 30
// const output = users.filter((x)=>x.age<40).map((x)=>x.firstName);
// console.log(output);


//  first name of all the people whose age is less then 30 using reduce method
// const output = users.reduce(function(acc,curr){
//     if (curr.age<40){
//         acc.push(curr.firstName)
//     }
//     return acc;
// },[])
// console.log(output);


// ====================================================================

// closure concept
// function outer(b) {
//     var a = 10;
//     // var c= c;
//     function inner(c) {
//         console.log(a, b, c);
//     }
//     return inner;
// }
// outer("belanekar")("akhil");

// function outermost() {
//     var someting = "2000sda";
//     function outer1() {
//         function inner() {
//             console.log(someting);
//         }
//         return inner;
//     }
//     return outer1;
// }
// outermost()()();
// ======================================================================




console.log(arr);

// call back function
// var subname = {
//     name : 'akhil',
//     lname: 'belanekar',
//     printfullName : function (){
//         console.log(this.name + " " + this.lname);
//     }
// }

// subname.printfullName();

// var subname2 = {
//     name : 'Akshata',
//     lname: 'belanekar',

// }

// call back function easy way
// var subname = {
//     name : 'akhil',
//     lname: 'belanekar',
// }

// let printfullName = function (){
//     console.log(this.name + " " + this.lname);
// }

// printfullName.call(subname);

// var subname2 = {
//     name : 'Akshata',
//     lname: 'belanekar',
// }
// printfullName.call(subname2);



// call back function easy way
// var subname = {
//     name : 'akhil',
//     lname: 'belanekar',
// }

// let printfullName = function (hometown,state){
//     console.log(this.name + " " + this.lname+ " from "+hometown+" "+state+ " state");
// }

// printfullName.call(subname,"sawantwadi", "maharashtra");

// var subname2 = {
//     name : 'Nikhil',
//     lname: 'belanekar',
// }
// printfullName.call(subname2,'belgaum',"karnataka");



// call back function easy way
// let printfullName = function (hometown,state){
//     console.log(this.name + " " + this.lname+ " from "+hometown+" "+state+ " state");
// }

// var subname = {
//     name : 'akhil',
//     lname: 'belanekar',
// }
// printfullName.call(subname,"sawantwadi", "maharashtra");
// var subname2 = {
//     name : 'Nikhil',
//     lname: 'belanekar',
// }

// //apply methos
// printfullName.apply(subname2,['belgaum',"karnataka"]);///in apply method we pass parameters as array list this will invoke now where else bind can be invoked later
// //buind method
// let printName = printfullName.bind(subname2,"sawant","wadi"); //buind method will buind everything and return  this method can be invokd later
// console.log(printName);//this will return whole function not the values 
// printName();//this will exicute as a function


