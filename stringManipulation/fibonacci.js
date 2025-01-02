function fibonacci(x){
    /*let Tab=[]
    Tab[0]=0+1
    Tab[1]=1+1
    for(let i=0;i<21;i++){
        Tab[i+2]=Tab[i]+Tab[i+1]
    }
    return Tab*/
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