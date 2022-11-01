// // if/else 

// // 1.

// function Number1(num1) {
//     if (num1 % 2 === 0)
//         console.log(num1 + " " + "es par")
//     else
//         console.log(num1 + " " + "es impar")

// }

// Number1(4)


// // 2

// function mayorMenor(num1, num2) {
//     if (num1 > num2)
//         console.log("The largest number is" + " " + num1)
//     else if (num1 < num2)
//         console.log("The largest number is" + " " + num2)
//     else
//         console.log("The numbers are equal")

// }

// mayorMenor(4, 4)


// // bonus

// function comparationNumbers(num1, num2, num3) {
//     if (num1 > num2 & num1 > num3)
//         console.log("The largest number is" + " " + num1)
//     else if (num2 > num1 & num2 > num3)
//         console.log("The largest number is" + " " + num2)
//     else if (num3 > num1 & num3 > num2)
//         console.log("The largest number is" + " " + num3)
//     else
//         console.log("The numbers are equal")

// }

// comparationNumbers(5, 5, 5)

// 3

// function triangles(num1, num2, num3) {
//     if (num1 === num2 === num3) {
//         document.write("The triangle is equilateral")
//         return "The triangle is equilateral"
//     }
//     else if (num1 === num2 || num1 === num3 || num2 === num3) {
//         document.write("The triangle is isosceles")
//         return "The triangle is isosceles"
//     }
//     else {
//        document.write("The triangle is scalene")
//        return "The triangle is scalene"
//     }
// }
// //4 RANGO ENTRE 
// function isInRange (num,numStar, numEnd){
//     if (num>=numStar&& num<=numEnd){
//         return "True"
//     } else {
//         return "False"
//     }
// }
// console.log(isInRange(12,1,10))

//5 
// function evalOperation(num1, num2, operation){
//     if (operation ==="add"){
//         return num1+num2
//     }
//     else if (operation==="subtract"){
//         return num1-num2
//     }
//     else if (operation==="multiply"){
//         return num1*num2
//     }
//     else if  (operation==="divide"){
//         return num1/num2
//     }
//     else if  (operation==="modulus"){
//         return num1&num2
//     }
//     else{
//         return "invalid operation"
//     }
// }
// console.log(evalOperation (2,2,"oqwdonqwdq"))


//------------------ARRAYS-----------------------------


// //1.1
// let monthsOfTheYear = ["January", "February", "Marj", "April", "Mei"]
// monthsOfTheYear[2] = "March"
// monthsOfTheYear[4] = "May"
// console.log(monthsOfTheYear)

// //1.2
// let newMonths = ["June", "July", "August", "September"]

// function eightMonths(monthsp1, monthsp2) {
//     totalmoths= monthsp1.concat(monthsp2)
// }

// eightMonths (monthsOfTheYear,newMonths)

// console.log(totalmoths)

// //1.3
// totalmoths.push ("October", "November", "December")
// console.log (totalmoths)

// // 2.1
// function threeNum (num1,num2,num3){
//     if (num1>num2){
//         totalmoths.pop()
//     }
//     if(num2>num3 && num2<10){
//         totalmoths.shift()
//     }
//     if (num2>num1 || num2>num3){
//     totalmoths.push ("October")
//     }
//     else {
//         console.log ("Bad Luck")
//     }

// }
// threeNum(7,7,7)
// console.log (totalmoths )

// 3

// let dayofWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function reverseTheWeek (arr,str){
// if (str.length>arr.indexOf(str))
// console.log(arr.reverse())
// }
// reverseTheWeek(dayofWeek, "Wednesday")

// //3.2

// function compareTheWeek(arr) {
//     if (arr[0].length < arr[1].length){
//        return arr.slice(0,3)
//     }
//    }

// //3.3

// function includesOneDay (str){

//     if (dayofWeek.includes(str)){
//     return "That's nice!"
// } else {
//     dayofWeek.push("Sunday")
//     return "Oh No!"
// }
// }

// console.log(includesOneDay(dayofWeek))

//4
// let formaG ="Paralelepípedo"
// function reverseString(str) {
//     let stringG = str.split("");
//     return stringG.reverse().join("");
// }
// console.log(reverseString(formaG))

// //5 

// let arrayToSwap =["Coca-Cola", "Redbull"]
// function swapTheArray (arr){
//     if (arr.length===2){
//     return (arr.reverse())
//     }
// }

// console.log(swapTheArray(arrayToSwap))

// OBJETOS
//1 y 2

// const citizen1 = {
//     name: "Quentin",
//     lastName: "Tarantino",
//     age: 57,
// }
// citizen1.city = "Knoxville"
// citizen1.age = 59
// console.log(citizen1)
//3

// function checkCitizenship(obj) {
//     if (obj.age > 18) {
//         obj.canVote = true
//     }
//     else {
//         obj.canVote = false
//     }
// }

// checkCitizenship(citizen1)
// console.log(citizen1)
// //4 y 5

// function createCitizen(name, lastName, age) {
//     if (name == !!"" || lastName == !!"" || age == !!"") {
//         alert("Invalid parameter")
//         return
//     } else {
//         let obj = { name: name, lastName: lastName, age: age }
//         return obj
//     }
// }
// let citizenName = prompt("Please enter citizen's Name:")
// let citizenLastname = prompt("Please enter citizen's LastName:")
// let citizenAge = prompt("Please enter citizen's Age:") * 1

// let citizen2 = createCitizen(citizenName, citizenLastname, citizenAge)
// console.log(citizen2)

// // 6 y 7
// function checkVoting(obj) {
//     if (Object.hasOwn(obj, "canVote")) {
//         return
//     } else {
//         return checkCitizenship(obj)
//     }
// }
// checkVoting(citizen2)

// 8
// function showValues(obj) {
//     let keys = Object.keys(obj)
//     for (let i = 0; i < keys.length; i++) {
//         console.log(obj[keys[i]]);
//     }
// }

// showValues(citizen1)
// // 9
// function deleteLastProp(obj) {

//     let keys = Object.keys(obj)

//     if (keys.length > 4) {
//         delete obj[keys[keys.length - 1]]
//         return
//     } else {
//         console.log("False");
//         return
//     }
// }

// deleteLastProp(citizen1)
// console.log(citizen1)

//Fight Club

const Tyler ={
    name: "Tyler",
    HP: 100,
    Damage: 15,
}
const Chuck ={
    name: "Chuck",
    HP: 80,
    Damage: 10, 
}

function attackTyler (obj){
    Chuck.HP= (Chuck.HP)-15

}
function attackChuck (obj){
    Tyler.HP= (Tyler.HP)-10
}

attackTyler (Chuck)
console.log(Chuck)
attackChuck (Tyler)
console.log(Tyler)




// let attacksNum = 0
// function fight (obj){
//     for (let i=Chuck.HP; i>=0; i-Tyler.Damage){
//         (attacksNum + 1)
//         console.log(Chuck)}
// }
// fight(Chuck)
