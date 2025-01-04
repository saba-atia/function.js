function countWords(string){
    let words = string.trim().split(/\s+/);
    return words.length;
}
document .write(countWords('hello from CodingAcademy!')); 