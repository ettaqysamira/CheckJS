function reverseString(str){
   let tab= str.split("")
   let temp;   
   for(let i=0;i<Math.floor(tab.length/2);i++){
        
        temp=tab[i]
        tab[i]=tab[tab.length-i-1]
        tab[tab.length-i-1]=temp
   }

  return tab.join("")
}
let str="GoMyCode"
console.log(reverseString(str))