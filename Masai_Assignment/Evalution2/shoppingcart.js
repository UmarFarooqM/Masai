
function discal(cart_items){
    return {
        electronics : function(cart_items){
            let total = cart_items.filter((ele)=>{
                if(ele.category=="Electronics"){
                    return ele.category
                }
            }).reduce((ele,curr)=>{
                    ele.price+= curr
            },0)
            console.log(total)
            // let total = cart_items.reduce((ele,curr)=>{
            //         if(ele.category=="Electronic"){
            //             ele.price+=curr
            //         }
            // },0)
            // console.log(total)
        }
    }
}



let cart_items= [
    { name: "Shirt", price: 25.99, quantity: 2, category: "Clothing" },
    { name: "Laptop", price: 999.99, quantity: 1, category: "Electronics" },
    { name: "Book", price: 12.50, quantity: 3, category: "Books" },
    { name: "Headphones", price: 49.99, quantity: 1, category: "Electronics" }
  ]
let fn = discal(cart_items)

fn.electronics()



