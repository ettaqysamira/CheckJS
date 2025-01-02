function fibonacci(x){
    let tab=[]
    tab[0]=1,tab[1]=1
    for(let i=2;i<=x;i++)
    {
        tab[i]=tab[i-1]+tab[i-2]
    }
    return tab
}
let x=11
console.log(fibonacci(x))