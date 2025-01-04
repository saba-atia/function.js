function AlphabeticalOrder(string){
    if (!string){
        return "The string is empty";
    }
    return string  .split('') .sort();
}
document .write(AlphabeticalOrder('hello'));