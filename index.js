// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = (Ralph) => {
    cats.push(Ralph);
    return cats;
}

const destructivelyPrependCat = (Bob) => {
    cats.unshift(Bob);
    return cats;
}

const destructivelyRemoveLastCat = (name) => {
    cats.pop(name);
    return cats;
}

const destructivelyRemoveFirstCat = (name) => {
    cats.shift(name);
    return cats;
}

const appendCat = (name) => {
    let newArray = [...cats];
    newArray.push(name);
    return newArray;
}


const prependCat = (name) => {
    let newArray1 = [...cats];
    newArray1.unshift(name);
    return newArray1;
}

const removeLastCat = (name) => {
    let newArray2 = [...cats];
    newArray2.pop(name);
    return newArray2;
}

const removeFirstCat = (name) => {
    let newArray3 = [...cats];
    newArray3.shift(name);
    return newArray3;
} 