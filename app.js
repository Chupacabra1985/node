const fs = require('fs');

const gender = ['MALE', 'FEMALE'];
const maleNames = ['Zenek', 'Gienek', 'Adolf', 'Paweł', 'Tomek'];
const femaleNames = ['Zosia', 'Gosia', 'Marta', 'Ola', 'Justyna'];
const lastName = ['Nowak', 'Kowalski', 'Kaczmarek', 'Szpak', 'Góra']
let people = [];

function renderChoice(arr) {
    const length = arr.length;
    const randomIndex = Math.floor(Math.random() * length);

    return arr[randomIndex];
}

for (let i=0; i<20; i++) {
    let person = new Object();
    person.gender = renderChoice(gender);
    if (person.gender === 'MALE') {
        person.name = renderChoice(maleNames);
    } else {
        person.name = renderChoice(femaleNames);
    }
    person.lastName = renderChoice(lastName);
    person.age = Math.floor(Math.random() * (78 - 18) ) + 18;

    people.push(person);
    console.log(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});