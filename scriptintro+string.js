// Välja flera varibler samtidigt och byta namn på alla. Välj och tryck F2



// // let btn1 = document.getElementById("btn1");
// // btn1.addEventListener("click", function(){
// // console.log('Hej')
// // });

// // SCOPE är vart man kan komma åt koden, 

// // var är en global variabel, även om den är innanför local scope. accessbar överallt i koden.   
// var hej = "hej" // GLOBAL VARIABEL

// {   // HÄR ÄR LOKALT SCOPE, KALLAS BARA SCOPE 
// let qwerty = "qweer" //LOKALA VARIBLER, KSn 
// const asddf = " asdf" //LOKALA VARIBLER
// }

// {// HÄR ÄR ETT ANNAT LOKALT SCOPE, KALLAS BARA SCOPE 

// }


// // JAVASCRIPT TYPER



// string
// number
// boolean
// bigInt = jättestora nummer
// Null = tomt, (manuellt)
// undefined = odefinerat, tomt (automatiskt) 
// object {}= ett objekt innehåller ett eller flera värden
// array []= lista med värden, array är datatypen objekt 


let string = "Magnus"
console.log(string.indexOf('g'))

let string2 = "Magnus"
console.log(string2.toLowerCase()) // gör om alla till små

let string3 = "Magnus"
console.log(string3.toUpperCase()) // gör alla till stora

let mittNamn = "Magnus Wretblad"   // KOLLA SPLIT
let uppdelatNamn = mittNamn.split(' ') // Här delas allt i stringen där det finns ett mellanslag! Kan vara vad som helst. 
console.log(uppdelatNamn) // får tillbaka en lista med vad som finns uppdelat med villkoret i metoden. 
console.log(uppdelatNamn[0]) // Här får du ut positionen/index i den nya arrayen. 


console.log(mittNamn.trim()) // tar bort mellanslag innan och efter texter så att det inte blir fel

let texttyp = "jag är \"bäst\" i hela världen";
console.log(texttyp); 

let texttyp2 = `jag är \'bäst'\ `
console.log(texttyp2) 



const firstName = "Magnus";
const lastName = "Wretblad";

const fullName = firstName + lastName

console.log("Jag heter" + " " + firstName + " " + "i förnamn" + " " + "och" + " " + lastName + " " + "i efternamn");

console.log(`Jag heter ${firstName} i förnamn och ${lastName} i eftermamn`);


let person = {
  firstName: "Magnus",
  lastName: "Wretblad",
  age: 41,
  wheight: 81
};
person.hair = "blond";


let person2 = ["magnus", "wretblad", 41, 85] // ...

let text = " "; 
for(let i = 0; i < person.length; i++) {
  text += person[i];
}
console.log(person)

console.log("Förnamn: " + person.firstName + ", " + "Efternamn: " + person.lastName + ", " + "Ålder: " + person.age + ", " + "Vikt: " + person.wheight);
console.log(`Förnamn: ${person.firstName}, Efternamn: ${person.lastName}, Ålder: ${person.age}, Vikt: ${person.wheight}`);


let text5 = 'text '
text5 += text5
text5 += text5
text5 += text5 

console.log(text5)

