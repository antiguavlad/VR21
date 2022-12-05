// Set time out: 

// setTimeout(() => {
//     console.log("Print me in 3 seconds "); // all the code inside here will execute in the set time in this case is in 3 seconds
// }, 3000); // 3 seconds in miliseconds


//timer ID:
let timeId; // it help with to check with the state to start or stop
//counter holder
let counter = 0; // need to be let because it is changed

//function time increment function
function incrementTime() {
    //increase the counter
    counter++;
    document.querySelector("#count").innerText = counter;

}

// start function:
function start() {
    // check if the counter has been started:
    if (!timeId) {
        // if not started then increment the counter by one second
        timeId = setInterval(incrementTime, 1000); // by one seconds 
        //timeId = setInterval(incrementTime, 3000);// by 3 seconds
    }
}

//stop function: 
function stop() {
    //clear the counter
    clearInterval(timeId);
    timeId = null;


}

function reset() {

    //clear the counter
    clearInterval(timeId);
    timeId = null;
    document.querySelector("#count").innerText = "-"; // this will reset 

}