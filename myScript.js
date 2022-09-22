// console.log('hello world')

// const myArray = [123, "text", true, 'a'];

// const personOne = {
//     name: "beni",
//     lastName: "Franklin",
//     age: 25,
//     iAmEating: () => {
//         return ("I am eating")
//     },
//     bestFriends:[
//         {
//             name: "Nikolas",
//             lastName: "Cage",
//             age: 60,
//             iAmEating: () => {
//                 return ("I am eating")
//             },
//             bestFriends:['Arnold shwarz'] 
//         },
//         {
//             name: "Sarah",
//             lastName: "Conor",
//             age: 30,
//             iAmEating: () => {
//                 return ("I am eating")
//             },
//             bestFriends:[                
//             ]
//         }
//     ]
// };

// console.log(personOne)
// console.log(personOne.bestFriends[0]);
// console.log(personOne.bestFriends[0].bestFriends[0])

// console.log(person.eat()) 
// console.log(myArray)

const persons = `[
    {
        "fName": "Beni",
        "lName": "Franklin",
        "age": 50
    },
    {
        "fName": "Sarah",
        "lName": "Conor",
        "age": 65
    }    
]`

try {    
    const myJson = JSON.parse(persons)
    console.log(myJson)
} catch (error) {
    console.log('error parse to json')
}


console.log('hello world')
