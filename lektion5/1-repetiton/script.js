const persons = [
    {firstName: 'magnus', lastName:"wretblad", age:35},
    {firstName: 'magnus2', lastName:"wretblad4", age:40},
    {firstName: 'magnus3', lastName:"wretblad5", age:45}
]

// FOR LOOP
// for(let i = 0; i < persons.length; i++){
//     console.log(persons[i])
// }


// FOR OF LOOP
// for(let person of persons){   //let persons kan heta vad som helst. 
//     console.log(person)
// }

// FOR EACH LOOP. tar en funktion som parameter! HIGH ORDER  
// persons.forEach(person => {
//     console.log(person.lastName)

// })

// // While 

// // räknevariablen läggs utanför
// let i = 0;
// while(i < 10){
//     i++
// } 

// do {
//     i++
// } while(i < 11) 


// let email = "magnus@mail.com"  
// let value = 3

// if(email.includes("@") && !email.includes(" ")){ 
//     console.log(email)
// }
// // GOOGLA regexr email, Om man vill kolla att emailinput stämmer
// // REGULAR EXPRESSION regexr.com. ISTÄLLET FÖR ATT SKRIVA INCLUDE() SJÄLV 
// const regEx = /rre@.magnuswretbladcomtretrevfvsv45454/ // Sätt in en annan! 

// if(regEx.test(email)){
//     console.log('email är ok')
// }

// if(!regEx.test(email)){
//     console.log('email inte är ok')
// }

// if(regEx.test(email) && value!== " "){
//     console.log("allt i formuläret ser bra ut")
// }


//FUNKTIONER ------->> HOISTING skickas upp i coden



function funk1(){  // DENNA HOISTAS (lääggs automatisk i toppen)
    let sum = 3 + 5
    return sum
}
console.log(funk1())


// Att spara funktionen i en variabel

const funk2 = function(){
    let sum = 6 + 6
    return sum
}
console.log(funk2())

// ELLER ARROW funkar på samma sätt (alltså spara funktionen i en varibel)
const funk3 = () => {
    let sum = 10 + 10
    return sum
}
console.log(funk3())



// const fullName = function(firstName, lastName){
// if(typeof firstName == "string" && firstName !== " " && lastName !== " " ){
//         return firstName + " " + lastName
// }else{
//     return "du måste ange ett riktigt namn"
// }
// }


// ARROW 

const fullName = (firstName, lastName) => {
    return firstName + " " + lastName
}

console.log(fullName("Magnus", "Wretblad"))

const calc = (num1 = 0, num2 = 5) => {
  return +num1 + +num2
}

console.log(calc(1, 1)) // skriver över värdet som deklareras i parantesen. funkar som default värde. 


// const funk4 = () => {}
// const funk4 = firstName => {return. blal +blalb plus + firstName.....}  //// OM DET ÄR ENDAST 1 (EN PARAMETER) BEHÖVS EJ parantes och RETURN
// const funk4 = firstName => "hej" + firstName  

const person = {

    forNamn:"Magnus",
    efterNamn:"Wretblad",
    changeForName(nyttnamn){
        this.forNamn = nyttnamn
    },
    fullName(){
        return this.forNamn + " " + this.efterNamn 
    }
}
console.log(person)
person.changeForName("Henrik")
console.log(person)
console.log(person.fullName())


const names = ["dfdfd", "bvbcvb", "34434"]

names.forEach(a =>{
   
console.log(a)
})

const minFunktion = (callback) => {
    let value = 500 + 35
    callback(value)
}

const newFunction = (value) => {console.log(value)}

console.log(newFunction)

// Övingsuppgift 3

const greet = name =>{
    console.log("hej" + name)
} 
greet("magnus")

const returnColor = (number) => {
    if(number >= 0 && number <= 12){
     return "white"   
    }
    else if(number <= 18){
        return "green"
    }
    else if(number <= 25){
        return "red"
    } 
    else if(number <= 100){
        return "blue"
    }
    else{
        return "black"
    } 
}

console.log(returnColor())

// const returnColor2 = (nummer) =>{
//     case(number >= 0 && number <= 12):
//     return "white"

// } 