function doublechar(string){
    let result = '';
    for (let i=0 ; i<string.length;i++){
        result += string[i]+ string[i];
    }
    return result;
}
document .write(doublechar('coding'));