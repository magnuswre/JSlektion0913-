// const names = ['Magnus','Henrik','Lisa','Viktor']

// console.log(names)

// FOR-LOOP = loopar ett givet antal gånger. 

// FOR OF - loopar igenom en hel array
console.log(`-----------FOR OF------------`)

const hopp = ["grrg", "yrtr" , "hnhn" , "kljkl"] 

for(let blaj of hopp){
    console.log(blaj)
 }

// for(let name of names){
//     console.log(name)
// }




const anvandare = [
    {name: 'Magnus', email: "magnus@gmail.com", age:35, status: true },
    {name: 'Magnus1', email: "magnus1@gmail.com", age:36, status: false },
    {name: 'Magnus2', email: "magnus2@gmail.com", age:37, status: true}
]

for(let user of anvandare){

    console.log(" hej "  + user.name, user.email )

}

// Boolens True and False

let text1 = 'hej'; // true
let text2 = ''; // false


console.log("--------includes() metod------------------")
// ----- (statement i paratesen)
let email = "test@test.com"
console.log(email.includes('@')) //true ! includes metod  
console.log(email.includes('1')) //false ! includes metod

// -1 false värde = false
// 0 false värde = false // som binört negativt
// 
// 1 true värde = true // som binärt positivt  

// true == 0 = false    
// false == 0 = true

// COMPARE STATEMENTS
console.log("--------- COMPARE STATEMENTS------------")
let nmb = 13;
let txt = "13"

console.log(txt == 13) // = true  (jämför inte datatyper, bara värdet)
console.log(txt === 13) // = false (Jämför datatyper och datatyper!)            

console.log(txt != 13)  // false! 
console.log(txt !== 13) //true! 

console.log("----------------------------------")


let inLoggad = false 
inLoggad = true // updaterad
if(inLoggad){ // inLoggad är uppdatad till true. så den är samma som true som statement!   
    console.log("hej")
}


// let btn = document.getElementById(btn)

// btn.addEventListener('click', () => {

// if(inLoggad){
//   console.log("inlogged")
// }
// })


const names1 = [];

if(names1.length > 0){
    console.log("Det här kommer inte visas")
}else {
    console.log("är noll")
}

names1.push("magnus")

if(names1.length){ // här checkar man mot arryens längd direkt! 
    console.log()
}else{
    console.log("nej")
}

console.log("----------------------------------")



let namnet = "magnus"

if(namnet === "magnus"){
    console.log("sant")
}


//

console.log("----- SWITCH-------")

let color = 'grön';

switch(color){   // JOBBAR SOM OM DET VORE TRE LIKAMEDTECKEN ===, ALLTSÅ VÄRDET OCH DATATYPEN 

    case 'red':
    console.log("röd");
    break;

    case 'black':
    console.log("svart");
    break;

    case 'grön':
    console.log("grön");
    break;

default:
    console.log("nej");

}

console.log("----- SWITCH-------")


