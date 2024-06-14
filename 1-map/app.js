'use strict';

const users = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];

const usersSet2 = new Map();
users.forEach(elem=>
    usersSet2.set(elem.id,elem.name)
)

const usersSet = new Set(users.map(elem=> users.find(user=> elem.id === user.id)))

console.log(usersSet)
console.log(usersSet2)
