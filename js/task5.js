function getAbsSum(array){
    if (!Array.isArray(array)){
        return "Please provide a valid array";

    }
    return array.reduce((sum,number) => sum + Math.abs(number),0);
}
document .write (getAbsSum([-1, -3, -5, -4, -10, 0])); 
