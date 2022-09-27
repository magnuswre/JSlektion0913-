//  SCOPE

// ANVÄND INTE var, Dom ör globoala. 


// let age = 34; // Global scope. Den ligger inte i ett kodblock

// if(true){
//     let fName = "Magnus"// Local scope 
//     let age = 55; // MAN KAN DEKLARERA EN VARIABEL MED SAMMA NAMN SOM UTANFÖR. INNE I KODBLOCKET ALLTSÅ    
//     console.log("inne i 1.1 kodblocket " + age)

//     if(true){
//         console.log("inne i 1.2 kodblocket " + age)
//     }
// }
// console.log("utanför i första kodblocket " + age) // DU KAN INTE ANVÄNDA let fName UTANFÖR KODBLOCKET

// if(true){
//     console.log("inne i 2:a kodblocket " + age)
// }
// console.log("utanför kodblocket " + age)

// DEKLARERA en funktion

// const siffor = function(a, b){
//     let sum = +a + +b
//     return sum
// } 
// console.log(siffror(10, 10)) // köra en funktion 

// const greet = function(){
//     console.log("Hej")
// }
// greet()

// let firstName = 'Magnus';

// const greet = function(name){
//         console.log(`hej ${name} hur är läget?`)
// }
// greet()
// greet("Jakob") // 
// greet(firstName) // SKICKA VÄRDET FRÅN VARABELN


// let firstName2 = 'Magnus';

// const greet1 = function(name1){
//      return `hej ${name1} hur är läget?`
// }
// console.log(greet('jean'))

// let wife = greet("jeans")

// console.log(wife)

// ARROW FUNCTION!! 

console.log("-----ARROW FUNCTION-----")

const calc2 = (num1, num2) => { //function() är inte med i arrow funcion 
    let sum = num1 + num2
    return sum
} 

console.log(calc2(10,10))

console.log("-----FÖRENKLING ARROW FUNCTION-----")
// Här är en förenkling av den ovan!! ta bort måsvingar och return 

const calc3 = (num3, num4) => num3 + num4
console.log(calc3(20,20))

console.log("-----ENDAST EN PARAMETER ARROW FUNCTION-----")
//När man har EN parameter så behövs inga paratester. Inte noll eller fler!! 

const calc4 = namn => `Hejsan ${namn}` 
console.log(calc4("Magnus"))

