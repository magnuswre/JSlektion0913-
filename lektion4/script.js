// -- // Välja flera varibler samtidigt och byta namn på alla. Välj och tryck F2
// -- // ----------- Numbers  ---------------// 
// -- // ** upphöjt
// -- // % division reminder ex. 10 % 3 = 1
// -- // += addera och lägg till
// -- // -= subba och lätt till 
// -- //*= gångra och lägg till värdet
// -- // /= dela och lägga till 


// -- let num1 = 10
// -- let num2 = 20 
// -- let num3 = 1.232132

// -- console.log(Math.round(num3)); // Avrunda till heltal 
// -- console.log(Math.ceil(num3)); // Avrunda till UPPÅT
// -- console.log(Math.floor(num3)); // Avrunda till NER

// -- const tal = { first: 12 * 2,
// --     second: 12 + 2 *4 
// -- }

// -- console.log(tal.first, tal.second)


// -- console.log("----------------")

// -- let tal1 = [12, 2];
// -- let tal2 = [15, 2, 4];
// -- let tal3 =  2; 
// -- console.log(tal1[0] * tal1[1]);
// -- console.log(tal2[0] + tal2[1] * tal2[2]);
// -- console.log(tal3 ** 5);


// -- console.log("-----MATH RANDOM-----------")

// -- let tal4 = Math.random()*100;
// -- console.log(tal4)
// -- console.log(Math.random()*10)

// -- let tal5 = Math.ceil(Math.random() * 100 -1)  // avrundar
// -- console.log(tal5);

// -- let randomNr = Math.random() * 1000;
// -- console.log(Math.floor(randomNr))+1
// -- console.log(randomNr) 

// -- let mat = ['pizza', 'sallad', 'ost', 'hej'];
// --   let utrakning = Math.floor(Math.random() * mat.length) // RANDOM GENOM INDEXNUMRET, 
// --   //och sparar det i en variabel. Som sen blir det tillfälliga indexnumret som hamnar mellan []. 
// --     console.log(mat)
// --     console.log(mat.length)
// --     console.log(mat[utrakning])
// -- // ----ÖVNINGSUPPGIFT 2 JS------//


const familj = ["Magnus", "Henrik", "Lisa", "Alva", "Adam"]

const bokstavsOrdning = familj.sort()

console.log(bokstavsOrdning)

let lastPerson = familj.pop()

console.log(lastPerson)

let nyFamilj = familj.unshift(lastPerson)

console.log(familj)


// Gör en for loop som ökar värdet på en variabel för varje person som finns i din array.

// tips: Skapa en variabel utanför loopen och sätt värdet på den till 0, öka sedan värdet med 1 i varje iteration i din loop.

let nano = 0;

for(let i = 0; i < familj.lengt; i++){
    nano++
}
console.log("Hej Alla " + familj)

for(let i = 0; i < familj.length; i++){

console.log("Hejsan " + familj[i])
}


// MAP MAP MAP 
// const greetings = names.map()

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

console.log("--------MAP--------")

const greetings = familj.map(b => b + " Hejsan")
console.log(greetings)


// Istället för for loop length.... Mer dynamisk.   
const greetings1 = familj.map(b => { 
// return "hejsan " + b
return `Hejsan ${b}`
})
console.log(greetings1)

// SPLICE lägga till, eller och ta bort 

// familj.splice(1, 1, "Smulan", "LO" )   // första siffran är indexplatsen man vill utgå från, 
//                                   // den andra siffran är hur många indexpositioner man vill ta bort. Sen läggs värdena i citaten i ordning 

// console.log(familj)



// console.log(nyFamilj)

// // --  Loopa genom en array

// const fruits = ['Apple', 'Mango', 'Cherry'];
// for (const fruit of fruits) {
//   console.log(fruit);

// let värde = [0]

// // for(let i = 10; i > värde.lenght; i++ ){

// //   console.log(värde[i])
// // }


//  FOR EACH

// let hej = ["hejsan"]

// familj.forEach(greeting => {      // lägg till för varje iteation
//       console.log(greeting)
// }




const mat = ["pasta", "sushi", "hamb", "dessert", "rerreer", 232324]

const loopa = mat.map(c => c + "  mmmm") // Här tar den den tillfälliga variablen c som innehåller i detta fall ett namn
                                       // ett för varje indexplats och sen lägger till hej.          
console.log(loopa)

const loopa2 = mat.map(d => {
    return "vad gott med "  + d 
})
console.log(loopa2)