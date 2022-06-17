const defaultResult=0;

let currentResult=defaultResult;
let logEntries=[]

function getuserinputvalue(){
    return parseInt(userInput.value);
}

function writetolog(operrationidentifier,previousresult,operationnumber,newResult){
    
    //object
    const logEntry={
        operation:operrationidentifier,
        previousresult:previousresult,
        number:operationnumber,
        result:newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredvalue=getuserinputvalue();
    const initialResult=currentResult;
    const calDescription=`${currentResult}+${enteredvalue}`
    currentResult=currentResult+enteredvalue;
    outputResult(currentResult,calDescription);
    writetolog('ADD',initialResult,enteredvalue,currentResult)
   
}

function subtract(){
    const enteredvalue=getuserinputvalue();
    const initialResult=currentResult;
    const calDescription=`${currentResult}-${enteredvalue}`
    currentResult=currentResult-enteredvalue;
    outputResult(currentResult,calDescription);
    writetolog('SUBTRACTION',initialResult,enteredvalue,currentResult)
}

function multiply(){
    const enteredvalue=getuserinputvalue();
    const initialResult=currentResult;
    const calDescription=`${currentResult}*${enteredvalue}`
    currentResult=currentResult*enteredvalue;
    outputResult(currentResult,calDescription);
    writetolog('MULTIPLICATION',initialResult,enteredvalue,currentResult)
}

function divide(){
    const enteredvalue=getuserinputvalue();
    const initialResult=currentResult;
    const calDescription=`${currentResult}/${enteredvalue}`
    currentResult=currentResult/enteredvalue;
    outputResult(currentResult,calDescription);
    writetolog('DIVISION',initialResult,enteredvalue,currentResult)
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);



