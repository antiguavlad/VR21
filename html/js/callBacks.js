//errow functions call back
// const walk = (name) => `$(name) walk`;
// const sit = (name) => `$(name) sit`;
// const jump = (name) => `$(name) jump`;

// normal function call backs
function walk(name) {
    return `${name} walk`;
}

function sit(name) {
    return `${name} walk`;
}

function jump(name) {
    return `${name} walk`;
}

function actionCreator(animalName, actionFn) {
    return actionFn(animalName);
}

console.log(actionCreator("frog", jump));
console.log(actionCreator("dog", walk));

console.log(actionCreator("cat", sit));

//print: 
// frog walk
// dog walk
// cat walk


