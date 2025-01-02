function capSentence(sentence){
    
    let str=sentence.split("")
    str[0]=str[0].toUpperCase()
    for(let i=0;i<str.length;i++){
        if(str[i]==" " || str[i]=="-")
        {
            str[i+1]=str[i+1].toUpperCase()
        }
    }
    return str.join("")
}
let str="the full-stack javascript bootcamp in gomycode"
console.log(capSentence(str))