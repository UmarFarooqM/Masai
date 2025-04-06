// let myFetch=fetch("https://jsonplaceholder.typicode.com/users")
// myFetch.then((data)=>{
//     return data.json()
// }).then((res)=>{
//     findComplexWebsiteUsers(res)
// })
// function findComplexWebsiteUsers(res){
//     res.forEach((ele)=>{
//         // console.log(ele)
//     })
//     let fill=res.map((ele)=>{
//         return (ele.website).split(".")
        
//     })
//     console.log(fill)
//     let count1=0;
//     for(let i=0;i<fill.length;i++){
//         count1++
//     }
//     console.log(count1)
    
//     let count=fill.reduce((acc,cur)=>{
//         return acc+cur
//     },0)
//     console.log(count)


// }





// let myFetch=fetch("https://jsonplaceholder.typicode.com/users")
// myFetch.then((data)=>{
//     return data.json()
// })
// .then((data)=>{
//     searchUser(data,"Bret")
//     searchUser(data,"Mani")
// })

// function searchUser(data,username){
//     let userfind=data.find((ele)=>{
//         if(ele.username==username){
//             return ele
//         }       
//     })
//     if(userfind){
//         console.log(userfind)
//     }
//     else{
//         console.log("User not found")
//     }
// }














// let myFetch=fetch("https://jsonplaceholder.typicode.com/users")
// myFetch.then((data)=>{
//     return data.json()
// })
// .then((res)=>{
//     calculateCompanyEmployees(res)
//     // console.log(res)

// })
// function calculateCompanyEmployees(res){
//     let company=res.map((ele)=>{
//         return ele.company
        
//     })
//     let unique=company.map((ele)=>{
//         return ele.name
//     })
//     console.log(unique)
//     count1=0
//     for(let i=0;i<unique.length;i++){
//         if(unique[i]!=unique[i+1]){
//             count1++
//         }
//     }
//     // console.log(count1)
//     let count=unique.reduce((acc,cur)=>{
//         acc=acc+cur
//         return acc
//     },0)
//     // console.log(count)
// }