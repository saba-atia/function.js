function MultiplyByLength(array){
    let length =array.length;
    return array.map(num=>num*length);
}
document .write(JSON.stringify (MultiplyByLength([4,2,5]))); 