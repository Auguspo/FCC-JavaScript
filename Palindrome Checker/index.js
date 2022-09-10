function palindrome(str) {
let nosp = str.replace(/[^a-zA-Z0-9]/g , '').replace(/\s+/g, '').toLowerCase();

let array = []; 
let alverdes=[];



for(let i=0;i<nosp.length;i++)
  {

  array[i]=nosp[i];
  console.log(array[i]);
    }

for(let i=0;i<array.length;i++)
  {
    alverdes[array.length-1 -i]=array[i];
    }

for(let i=0;i<alverdes.length;i++)
  {
    if(alverdes[i]!=array[i]){return false;}

    }

return true;

} 
palindrome("1 eye for of 1 eye.");