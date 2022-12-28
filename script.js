/** Exercice 1:  */

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1.
fruits.shift()

//2.
fruits.sort()

//3.
fruits.push("Kiwi")
    // console.log(fruits)

//4.
fruits.splice(0, 1)
console.log(fruits)

//5.
fruits.reverse()
console.log(fruits)



/** Exercice 2: */

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//1. 

console.log(moreFruits[1][1])