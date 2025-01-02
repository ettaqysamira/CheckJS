function primary_number(a){
    let premier=true
      for(let i=2;i<a-1;i++){
          if((a%i)==0){
            premier=false
            break
          }
          
      } 
      return premier
        
  }
  console.log(primary_number(15))