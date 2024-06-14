'use strict';
const isFourteen = (date) => {
    const birthday = new Date(date);
    const now = new Date();

    if(isNaN(birthday)) return "Не верно ввели дату!";

    let age = now.getFullYear() - birthday.getFullYear();
    const difMonth = now.getMonth() - birthday.getMonth();
    const difDays = now.getDate() - birthday.getDate();

    
    if (difMonth < 0 || (difMonth === 0 && difDays < 0)) {
        age--;
    }
    
    return age >= 14;
}

console.log(isFourteen('dasdasd'));
console.log(isFourteen('2010-1-1'));
console.log(isFourteen('2010-12-31'));