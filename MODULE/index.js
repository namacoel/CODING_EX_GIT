const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const {getCircleArea, getSquareArea }= require('./matUtils');
const {logFigureError, logInput, logOutput } = require('./log');



rl.question(
    "넓이를 구하고자 하는 도형의 종류를 입력해주세요. ( 정사각형, 원 ) : ",
    figure => {
        
    }

)
