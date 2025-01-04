function numbersOnly(array){
    return array.filter (element => typeof element !=='string');
}
document .write(JSON.stringify(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']))); 