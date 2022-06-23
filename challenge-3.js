// function sumMix(arr) {

//    var total=0;
//    for (let i=0; i<arr.length; 1++){
//     if(typeof arr[i]==="string"){
//         total=total + Number(arr[i]);
//     }else{
//         total=total + arr[i];
//     }
//    }
//    return total;
//  }
// let arr=[1,"2", 3, "4"];
// console.log(sumMix(array));
//   module.exports = sumMix

function sumMix(arr){
    let sum=0
for (let i=0; i<arr.length; i++){
        if (typeof arr[i]==='strings'){
          sum= sum + number(arr[i]);
        } else{
          sum= sum + arr[i]
        }
      }
    }
    module.exports = sumMix
      // return sum
       console.log(sumMix([2, 5,'ten', 6, 'ada']));