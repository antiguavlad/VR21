// Set time out: 

// setTimeout(() => {
//     console.log("Print me in 3 seconds "); // all the code inside here will execute in the set time in this case is in 3 seconds
// }, 3000); // 3 seconds in miliseconds

let timeId;
let counter = 0;

function incrementTime() {
    counter++;
    document.querySelector("#count").innerText = counter;

}

function start() {

    if (!timeId) {
        timeId = setInterval(incrementTime, 1000);
    }
}

function stop() {
    clearInterval(timeId);
    timeId = null;

}