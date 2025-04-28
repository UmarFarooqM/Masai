function rev(arr){
    let res=[] 
    for(let i=0;i<arr.length;i++){
        let amount=0
        for(let  j=0;j<arr[i].orders.length;j++){
            amount += arr[i].orders[j]
        }
        let obj= {name:arr[i].name, prices:amount}
        res.push(obj)
    }
    console.log(res)

let prices=[]
for(let i=0;i<res.length;i++){
    prices.push(res[i].prices)
}
// console.log(orders)
let min= Math.min(...prices)
let max = Math.max(...prices)
let res1=""
let res2=""
for(let i=0;i<res.length;i++){
   if(res[i].prices==max){
     let name=res[i].name
    res1=`Highest revenue restaurant: ${name}  (rupees: ${max})`
   }
   if(res[i].prices==min){
    let name=res[i].name
   res2=`Lowest  revenue restaurants: ${name} is (rupees: ${min} ) `
  }
}
let lowres=[]

for(let i=0;i<res.length;i++){
    if(res[i].prices!==max){
        lowres.push(res[i].name)
    }
}
 console.log(res1)
 console.log(res2) 
 console.log(`Low revenue restaurants:  ${lowres}`)  

}



let arr = [
    { name: "Spice Garden", location: "Mumbai", orders: [400, 600, 800, 1200] },
    { name: "Burger Hub", location: "Delhi", orders: [500, 700, 650, 550] },
    { name: "Pasta Palace", location: "Bangalore", orders: [200, 300, 150, 250] }
  ]

rev(arr)




