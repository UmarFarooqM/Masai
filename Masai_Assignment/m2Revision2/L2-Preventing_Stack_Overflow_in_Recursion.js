function recursion(n){
    if(typeof n !== "number"){
    return "Invalid input"
   }
   else if(n<0){
    return "Invalid input"
   }
    else if(n==0){
        return 1
    }
    else{
        return n* recursion(n-1)
    }
}
console.log(recursion(0))


