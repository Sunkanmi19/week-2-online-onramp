function arraySum(arr1, arr2) {
    let sum [];
    let firstlength = arr1.length;
    let secondlength = arr2.length;

    for(let i = 0; i<firstlength; i++){
        sum[i] = arr[i] + arr2[i % secondlength];
    }

    return sum;
}
console.log(arraysum([1,2,4,5,6,2,1], [2,3,5]));
console.log(arraysum([10,20,30,40,50], [20.40,60]));

module.exports = arraySum
