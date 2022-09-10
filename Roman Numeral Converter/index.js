function convertToRoman(num) {
    let str="";
   
    if(num>=1000){
      for(let i=0;i<=num/1000 -1;i++)
       {str=str.concat('M')};
       num= num%1000;
    }
    
     if(num>=900){
      for(let i=0;i<=num/900-1;i++)
       {str=str.concat('CM')};
       num= num%900;
    }
   
   if(num>=500){
      for(let i=0;i<=num/500-1;i++)
       {str=str.concat('D')};
       num= num%500;
    }
   
      if(num>=400){
      for(let i=0;i<=num/400-1;i++)
       {str=str.concat('CD')};
       num= num%400;
    }
   
       if(num>=100){
      for(let i=0;i<=num/100-1;i++)
       {str=str.concat('C')};
       num= num%100;
    }
       if(num>=90){
      for(let i=0;i<=num/90-1 ;i++)
       {str=str.concat('XC')};
       num= num%90;
    }
   
       if(num>=50){
      for(let i=0;i<=num/50-1;i++)
       {str=str.concat('L')};
       num= num%50;
    }
       if(num>=40){
      for(let i=0;i<=num/40-1;i++)
       {str=str.concat('XL')};
       num= num%40;
    }
   
       if(num>=10){
      for(let i=0;i<=num/10 -1;i++)
       {str=str.concat('X')};
       num= num%10;
    }
   
        if(num>=9){
      for(let i=0;i<=num/9-1;i++)
       {str=str.concat('IX')};
       num= num%9;
    }
   
        if(num>=5){
      for(let i=0;i<=num/5-1;i++)
       {str=str.concat('V')};
       num= num%5;
    }
   
       if(num>=4){
      for(let i=0;i<=num/4-1;i++)
       {str=str.concat('IV')};
       num= num%4;
    }
        if(num>=1){
      for(let i=0;i<num;i++)
       {str=str.concat('I')};
        }
   console.log(str);
    return str;
   }
   
   convertToRoman(1000);