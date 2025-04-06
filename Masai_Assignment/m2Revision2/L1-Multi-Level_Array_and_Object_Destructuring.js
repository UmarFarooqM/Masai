const people = [ 
    { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
     { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } 
    
    ];


let[{name:name1, address:{city:city1,street:{name:streetname1}}},
    {name:name2,address:{city:city2,street:{name:streetname2}}}]=people
let arr=[]

// for(let i=0;i<people.length;i++){
//         arr.push(`${name1} lives in ${city1} on ${streetname1}`)
//         // arr.push(`${name2} lives in ${city2} on ${streetname2}`)
//     }

// console.log(arr)



arr.push(`${name1} lives in  ${city1} on ${streetname1}, ${name2} lives in ${city2} on  ${streetname2}`)

console.log(arr)

// DIFFERENT APPROACHES

// for(let i=0;i<people.length;i++){
//     arr.push(`${people[i].name} lives in ${people[i].address.city} on ${people[i].address.street.name}`)
// }
// // console.log(arr)




// ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]