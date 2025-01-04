function minMaxLengthAverage (array){
    let min=Math .min (...array);
    let max=Math.max(...array);
    let length=array.length;
    let sum = array.reduce((acc,current)=>acc +current,0);
    let average=sum/length;
    return[min,max,length,average];
}
document .write(JSON.stringify  (minMaxLengthAverage([7, 13, 3, 77, 100]))); 