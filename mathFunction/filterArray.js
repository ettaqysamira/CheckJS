function filterOutSrting(str){
    let Tab=[]
    for(let i=0;i<str.length;i++){
        if(typeof(str[i])=="string")
            continue
        else{
            Tab.push(str[i])
        }
    }
    
return Tab

}
let Tab=[1,0,15,'GMC',85]
console.log(filterOutSrting(Tab))