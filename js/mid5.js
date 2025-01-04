function romanNumbers(num){
    let values=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let symbols= ['M','CM','D','CD','XC','L','XL','X','IX','V','IV','I'];
    let result='';
    for (let i=0;i<values.length;i++){
        while (num >=values[i]){
            result += symbols[i];
            num -= values[i];
        }
    }
    return result;
}
document .write(romanNumbers(1989));