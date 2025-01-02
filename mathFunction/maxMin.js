function minMax(arr){
    let max=arr[0]
    let min=arr[0]
    for(let i of arr){
       if(i>max)
        max=i
       if(i<min)
        min=i
       
    }
    return [min,max]
}
let arr=[2,6,-20,-6,80,90,29];
let resultat=minMax(arr)
console.log("Max="+ resultat[0] +"\n" + "Min="+resultat[1])
