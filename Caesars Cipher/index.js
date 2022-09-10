function rot13(str) {
  let caesar = "";
  let hex =0;
  

 const charCode = str.charCodeAt();


 
  for(let i=0;i<str.length;i++)
  {    
    hex=str[i].charCodeAt();
    if(hex >90 || hex <65){hex=hex-13;}
    caesar+=String.fromCharCode(
            ((hex + 13) <= 90) ? hex + 13: (hex + 13) % 90 + 64);
  }
 console.log(caesar)
 
  return caesar;
  
}

 
rot13("SERR CVMMN!");