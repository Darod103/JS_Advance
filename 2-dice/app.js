'use strict';

const dices = ["d4", "d6", "d8", "d10", "d12", "d16", "d20"]


const getRandomNum =(max,min = 1)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const diceRoll =(dicesArr) =>{
    const dice = dicesArr[getRandomNum(dices.length - 1,0)]
    return `Вы выбросили ${dice} ваше число ${getRandomNum(Number(dice.slice(1)))}`
}

console.log(diceRoll(dices))