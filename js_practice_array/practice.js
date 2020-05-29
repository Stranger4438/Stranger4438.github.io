var array = [3, -5, 1, 11, -22, 5, 31, 4, -2, 7];


//the biggest number in the array
array.max = function (array) {
    return Math.max.apply(Math, array);
};
console.log('Your biggest number is ' + Math.max.apply(Math, array))


//the smallest number in the array
array.min = function (array) {
    return Math.min.apply(Math, array);
};
console.log('Your smallest number is ' + Math.min.apply(Math, array))

//the sum of numbers in the array
var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum += array[i]
}
console.log('Your sum is ' + sum);


/*the product of numbers in the array
var product = 0;
for (var i = 0; i < array.length; i++) {
    product *= array[i]
}
console.log('Your product is ' + product);*/


//the sum of numbers in the array
var negative = array.filter(function (v) {
    return v < 0;
}),
    positive = array.filter(function (v) {
        return v > 0;
    }),
    array = negative.concat(null, positive);

console.log(JSON.stringify(array));