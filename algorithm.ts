function SortArrMin(array: any[]) {
    let min= array[0]
    for (let j = 0; j < array.length; j++) {
        if (array[j] < min) {
            min = array[j];
        }
    }
    return min;
}

function SortArrMax(array:any[]) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

function SumArr(array:any[]){
    let sumArr = 0;
    for (let i = 0; i < array.length; i++) {
        sumArr += array[i];
    }
    return sumArr;
}

function OddOrEvenNumber(array:any[]){
    let oddNumber =[]
    let evenNumber =[]

    for(let i=0; i<array.length; i++){
        if(array[i]%2==0){
            evenNumber[i] = array[i]
        }else{
            oddNumber[i] = array[i]
        }
    }
    return {oddNumber,evenNumber}
}

function miniMaxSum(){
    let array = [1,3,5,7,9]

    let min =SortArrMin(array)
    let max = SortArrMax(array)

    let sumArr = SumArr(array)
    let miniSum = sumArr - max
    let maxSum =  sumArr - min

    let even =OddOrEvenNumber(array).evenNumber
    let odd =OddOrEvenNumber(array).oddNumber

    return {miniSum , maxSum, even, odd, sumArr}
}

let miniSum = miniMaxSum().miniSum
let maxSum = miniMaxSum().maxSum
let even =miniMaxSum().even
let odd =miniMaxSum().odd
let sumArr = miniMaxSum().sumArr

console.log('sumArr: ', sumArr)
console.log('miniSum: ', miniSum)
console.log('maxSum: ', maxSum)
console.log('even Number: ', even)
console.log('odd Number: ', odd)
