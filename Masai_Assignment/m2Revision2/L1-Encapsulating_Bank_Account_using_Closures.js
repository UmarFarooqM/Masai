function createBankAccount(amoount){
    let balance=0
    balance += amoount
    return {
    deposit: function(amount){
        balance+= amount
    //    console.log(balance)
    return balance
    },
    withdraw: function(amount){
        balance -= amount 
        return balance
    }, 
    getBalance : function(){
        return balance
        
    }

    }
}

const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120