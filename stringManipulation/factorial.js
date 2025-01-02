function factorial(x){
    let factorialNum=1
    if(x==0){
        
        return factorialNum
    }
    else{
        for(let i=1;i<=x;i++){
            factorialNum=factorialNum*i
        }
    }
    
    return factorialNum
}
let x=4
let funcResult=factorial(x)

console.log(funcResult)