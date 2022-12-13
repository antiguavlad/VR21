//local storage 
const PLAYER_LOCAL_STORAGE = "playerLocalStorage";

// when the card is created it will give an id starting at 1
let cardId = 1;

//getting the specific model with its id  global deleteModal
const deleteModal = document.getElementById('deleteModal')
//add event listerner to the model -
deleteModal.addEventListener('show.bs.modal', setOpenModalDataAttr);

//global updateModal
const updateModal = document.getElementById('updateModal');
updateModal.addEventListener('show.bs.modal', setOpenModalDataAttr);

//global  updateForm 
const updateForm = document.querySelector("#updatePlayerForm")
updateForm.addEventListener("submit", gatherFormData);

//global addForm
const addForm = document.querySelector("#add-player-form")
addForm.addEventListener("submit", gatherFormData);

document.querySelector("#confirm-delete").addEventListener("click", deleteCard);

//calling load items function
loadStorageItems();

function gatherFormData(event) {
    event.preventDefault(); //prevent from refreshing the page
    //recording the ids for either the add form or update player form to know which form submit. 
    let formType = event.target.id;
    let playerData;
    console.log(formType);

    if (formType === "add-player-form") {
        const form = document.querySelector("#add-player-form");
        //player data object
        playerData = {
            imageSource: form.querySelector("#playerImageUrl").value,
            playerName: form.querySelector("#playerName").value,
            playerDescription: form.querySelector("#playerDescription").value
        };
    }
    else {
        //if there is a player then update the player
        const form = document.querySelector("#updatePlayerForm");
        playerData = {
            imageSource: form.querySelector("#updateImageUrl").value,
            playerName: form.querySelector("#updatePlayerName").value,
            playerDescription: form.querySelector("#updateDescription").value
        };
    }
    isValidImage(formType, playerData)
}


//Check if the image is valid: 
function isValidImage(typeForm, playerInfo) {

    fetch(playerInfo.imageSource, { method: "HEAD" }) //make a http request for the response header HEAD
        .then(res => {// response 200 = ok,  404 = error not found, or false  or 500 = server error or false
            if (res.ok) {// if response comeback as 200 = true it create a property as ok
                if (typeForm === "add-player-form") {
                    addNewCard(playerInfo)
                }
                else {
                    updateExistingCard(playerInfo)
                }

            } else {

                showErrorMessage(true, typeForm);//if invalid image then show the error message
            }

        });
}
function showErrorMessage(show, type) {  //if true = look first statement     // or else = false: look second statement  
    let errorMessage = type === "add-player-form" ? document.querySelector(".invalid-img") : document.querySelector(".invalid-update-img")

    if (show) {
        errorMessage.classList.remove("d-none") // removing class="invalid-img d-none"
    }
    else {
        errorMessage.classList.add("d-none");
    }
}

//update existing player card: 
function updateExistingCard(player) {
    showErrorMessage(false, "update"); // this is to void showing the invalid image message
    let idToUpdate = updateModal.dataset.cardTrigger;
    //change the existing container from the form and change the inner html of the card
    let itemToUpdate = document.getElementsByClassName("row")[0].querySelector(`#${idToUpdate}`)

    //update image source
    itemToUpdate.querySelector(".playerImg").src = player.imageSource;
    //update player name
    itemToUpdate.querySelector(".card-title").innerHTML = player.playerName;
    //update description
    itemToUpdate.querySelector(".card-text").innerHTML = player.playerDescription;
    //empty form
    updateForm.reset();
    //To close on save
    updateForm.querySelector("[data-bs-dismiss='modal']").click();
    player.itemID = idToUpdate; //giving the id to the update
    updateLocalStorage(player);
}

// Open Modal Data Attribute: 
function setOpenModalDataAttr(event) {
    console.log(event)
    //check who opened the model
    let cardOpenModel = event.relatedTarget.closest(".col-md-3").id; // closest looking parent with the matching identifier and class

    // set the model attribute to match the card id that open the model
    event.target.dataset.cardTrigger = cardOpenModel;
    if (event.target.id === "updateModal") {

        let containerItem = document.querySelector(".row");
        let cardToUpdate = containerItem.querySelector(`#${cardOpenModel}`)// return card

        //grabe the input field ussing document.querySelector
        updateForm.querySelector("#updateImageUrl").value = cardToUpdate.querySelector(".playerImg").src;
        updateForm.querySelector("#updatePlayerName").value = cardToUpdate.querySelector(".card-title").innerText;
        updateForm.querySelector("#updateDescription").value = cardToUpdate.querySelector(".card-text").innerText;
    }

}
//delete card
function deleteCard(event) {
    //getting the value of the data attribute of the model
    let idToDelete = deleteModal.dataset.cardTrigger;
    //looking for match in the row
    let itemToRemove = document.getElementsByClassName("row")[0].querySelector(`#${idToDelete}`)
    //remove from the DOM
    itemToRemove.remove();
    //remove from local storage call function in here and pass the id to delete
    removeLocalStorage(idToDelete);
}

//add mew player
function addNewCard(player) {
    showErrorMessage(false, "add-player-form"); // this is to prevent showing the invalid image massage
    //boolean if it has a property it is coming from local storage
    let isFromStorage = player.hasOwnProperty("itemID"); // to prevent creating new id if exist 
    // if it is from local storage it should use the id that is coming from local storage  or : means for new items added
    let playerId = isFromStorage ? player.itemID : `player-${cardId++}`;

    const contentCard = `
            <div class="col-md-3 col-sm-12" id= ${playerId}>
                <div class="card">
                    <img
                        src=${player.imageSource}
                        class="card-img-top playerImg" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${player.playerName}</h5>
                        <p class="card-text">
                            ${player.playerDescription}
                        </p>
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                                Update
                            </button>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
        </div>`;


    document
        .querySelector(".row")
        .insertAdjacentHTML("beforeend", contentCard);
    // to reset the form
    addForm.reset();
    //To close on save
    addForm.querySelector("[data-bs-dismiss='modal']").click();
    if (!isFromStorage) {//if it has an id then we do not want to add it again to local storage only add it when is a new item
        player.itemID = playerId;
        addLocalStorage(player);// add items to local storage prevent from adding again if exist
    }
}

//local storage 
function addLocalStorage(playerCard) {
    let items = getLocalStorage();
    items.push(playerCard); // push into the array to add
    localStorage.setItem(PLAYER_LOCAL_STORAGE, JSON.stringify(items));//pass the items as a string using stringify
}


// get items from local storage
function getLocalStorage() {
    //nested if statement: 
    return localStorage.getItem(PLAYER_LOCAL_STORAGE) === null ||
        localStorage.getItem(PLAYER_LOCAL_STORAGE) === undefined ||
        localStorage.getItem(PLAYER_LOCAL_STORAGE) === "" ? [] : JSON.parse(localStorage.getItem(PLAYER_LOCAL_STORAGE)) // if items return the existing array
}

//updateLocalStorage()
function updateLocalStorage(updateInfo) {
    let items = getLocalStorage();
    //replace in the array 
    // pass id and object
    let index = items.findIndex(item => item.itemID === updateInfo.itemID)// find the index of item in local storage where the id matches the id of the card that is being updated
    items.splice(index, 1, updateInfo); // remove and update 
    //reset items in local storage
    localStorage.setItem(PLAYER_LOCAL_STORAGE, JSON.stringify(items));
}

//remove local storage
function removeLocalStorage(playerID) {
    let items = getLocalStorage();// getting all the items inside local storage
    //FILTER function items.filter(item => item.itemID != playerID)  it create a new array and add items not equal to player id that was deleted so it is not included on the new array which only include non  deleted items
    let newData = items.filter(item => item.itemID != playerID);
    //add new array to the local storage and replace the old one that has the deleted item
    localStorage.setItem(PLAYER_LOCAL_STORAGE, JSON.stringify(newData)); //convert the array into string: JSON.stringify(newData))
}

function loadStorageItems() {
    let items = getLocalStorage();
    //loop and append to dom using the callBack
    items.forEach(item => addNewCard(item))

}
