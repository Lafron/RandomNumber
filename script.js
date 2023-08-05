'use strict'

const rndNumber = Math.round(100 * Math.random(), 2);

function rndBot(rndN) {
    return function comparNum(clientNum, counter, comp) {
        rndN == clientNum ? checkAnsw("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
            : (rndN > clientNum ?
                (alert("Загаданное число больше"), getCheckNum(counter, comp))
                : (alert("Загаданное число меньше"), getCheckNum(counter, comp)));
    };
};


function getCheckNum(counter, comp) {
    console.log("Осталось " + counter + " попыток");
    let answ = "";
    counter > 0 ? (
        answ = prompt("Enter a number"),
            answ === null ? alert("Игра окончена.") :
                (!isNaN(parseFloat(answ.trim()))
                    ? (counter--, comp(answ, counter, comp))
                    : (alert("Введи число!"), getCheckNum(counter, comp)))
        ) : checkAnsw("Попытки закончились, хотите сыграть еще ?")
        

    // if (counter > 0)
    // {
    //     const answ = prompt("Enter a number");

    //     if (answ === null) {
    //         alert("Игра окончена.");
    //     }
    //     else if (!isNaN(parseFloat(answ.trim()))) {
    //         counter--;
    //         comp(answ, counter, comp);
    //     }
    //     else {
    //     alert("Введи число!");
    //     getCheckNum(counter, comp);
    //     };
    // }
    // else {
    //     checkAnsw("Попытки закончились, хотите сыграть еще ?");
    // };
};

const checkAnsw = message => {
     const choose = confirm(message);
     choose ? Start() : null;
}

const Start = () => {
    let comp = rndBot(Math.round(100 * Math.random(), 2));
    getCheckNum(10, comp);
};

Start();
