var tags = ['li','div','li','p','h1','p','h1','div','div','li','h1','p','h1','ol','br'] ;
var tag2 = {};
tags.forEach(tag => {
    tag2[tag] = (tag2[tag] || 0) +  1;
})
console.log(tag2)

var num1 = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
var num2 = [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
var result = []




for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
        if (num1[i] === num2[j] ) {
            result.push(num1[i])
        }



    }
}
console.log(result)