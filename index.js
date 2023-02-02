function addFunc(firstNum){
    let firstValue = firstNum;
    return function(secondNum){
        return  firstValue += secondNum;
       }
}

const sum = addFunc(0);
console.log(`first ${sum(3)}`);
console.log(`second ${sum(5)}`);
console.log(`third ${sum(20)}`);