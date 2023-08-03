'use strict'

function rndBot(rndN) {
    return function comparNum(clientNum) {
        rndN == clientNum ? alert("Поздравляю, Вы угадали!!!")
            :   (rndN > clientNum ?
                    (alert("Загаданное число больше"), getCheckNum())
                    :   (alert("Загаданное число меньше"), getCheckNum())
                );
    };

};

const comp = rndBot(Math.round(100 * Math.random(), 2));

function getCheckNum() {
   const answ = prompt("Enter a number").trim();

    if (answ === null) {
        alert("Игра окончена.");
    }
    else if (isNumber(answ)) {
        comp(answ);
    } else {
        alert("Введи число!");
        getCheckNum();
    }
};
 
   
const isNumber = num => {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

getCheckNum();