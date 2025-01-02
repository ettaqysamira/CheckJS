function sumArray(array){
    let sum=0;
    for(let x of array){
        sum+=x
    }
    return sum
}
let array=[10,12,3]
result=sumArray(array)
console.log(result)