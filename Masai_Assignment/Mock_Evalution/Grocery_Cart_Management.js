
function cartmanage(totalItem,items,removedItem){
   let obj={}
    let arr=[]
    let pop=0
    return{
        additem:function(item){
            arr.push(item)
            return
        },
        getitem: function(){
            // console.log(arr)
            return arr
        },
        removeitem : function(item){
            pop=arr.pop(item)
            // console.log(pop)
            return pop
               
        },
        totalitems: function(){
            let v={totalItems:arr.length,items:arr,removedItem:pop}
            console.log(v)
        }

    }
    
}
let cart=cartmanage()
cart.additem("apple")
cart.additem("Banana")
cart.additem("Bread")
cart.additem("Milk")

cart.getitem()
cart.removeitem()
// cart.getitem()
cart.totalitems()

