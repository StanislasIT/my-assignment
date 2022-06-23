 function secondLargest(arr) {
    let sortedArr=arr.sort((a, b)=>{return b-a;}) 
    return sortedArr[1]
 }
module.exports = secondLargest

console.log(secondLargest([1,4,7,5,9]));
