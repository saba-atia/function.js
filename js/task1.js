function findSmallest(array){
    if (array.length===0){
        return "The array is empty";
    }
    return Math.min(...array);
}
document .write(findSmallest([30, 45, 60, 7])); 