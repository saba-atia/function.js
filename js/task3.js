function oddOrEven(num){
   if (typeof num !=='number'){
    return "Please provide a valid number";
}
return num%2===0 ?"Even":"Odd";
}
document .write(oddOrEven(9)); 


