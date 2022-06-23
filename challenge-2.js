function filterArray(arr) {
    return arr.filter(function (elem){return typeof elem === 'number'; });
}
module.exports = filterArray
console.log(filterArray([2,5,7,8,"mike"]))