function evenNum(array){
    if (!Array.isArray(array)){
        return "Please provide a valid array";

    }
    return array.filter(number => number%2===0);
}
document .write(JSON.stringify (evenNum([1, 2, 3, 4, 5, 6,7,8,9]))); 
