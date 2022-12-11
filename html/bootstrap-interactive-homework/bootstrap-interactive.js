const PLAYER_LOCAL_STORAGE = "playerLocalStorage";
let cardId = 1; // when the card is created it will give an id starting at 1
//getting the specific model with its id
const deleteModal = document.getElementById('deleteModal')
//add event listerner to the model
deleteModal.addEventListener('show.bs.modal', setOpenModalDataAttr);

//global
const updateModal = document.getElementById('updateModal');
updateModal.addEventListener('show.bs.modal', setOpenModalDataAttr);
//global
const updateForm = document.querySelector("#updatePlayerForm")
updateForm.addEventListener("submit", gatherFormData);

//global
const addForm = document.querySelector("#add-player-form")
addForm.addEventListener("submit", gatherFormData);

document.querySelector("#confirm-delete").addEventListener("click", deleteCard);

//calling load items function
loadStorageItems();

function gatherFormData(event) {
    event.preventDefault();
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
        const form = document.querySelector("#updatePlayerForm");
        playerData = {
            imageSource: form.querySelector("#updateImageUrl").value,
            playerName: form.querySelector("#updatePlayerName").value,
            playerDescription: form.querySelector("#updateDescription").value
        };
    }
    isValidImage(formType, playerData)
}


//Chris sample: I  still need to put the input
function isValidImage(typeForm, playerInfo) {

    fetch(playerInfo.imageSource, { method: "HEAD" }) //make a http request for the response header HEAD
        .then(res => {// response 200 = ok 404 = error not found or false  or 500 = server error or false
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


function updateExistingCard(player) {
    showErrorMessage(false, "update"); // 
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
}

function setOpenModalDataAttr(event) {
    //check who opened the model
    let cardOpenModel = event.relatedTarget.closest(".col-md-3").id; // closest looking parent with the matching identifier and class

    // set the model attribute to match the card id that open the model
    event.target.dataset.cardTrigger = cardOpenModel;

}

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

function addNewCard(player) {
    showErrorMessage(false, "add-player-form"); // this is to void showing the invalid image 
    //boolean if it has a property it is coming from local storage
    let isFromStorage = player.hasOwnProperty("itemID"); // to prevent creating new id if exist 
    // if it is from local storage it should use the id that is coming from local storage  and the or : means for new items added
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
    items.push(playerCard); // push into the array
    localStorage.setItem(PLAYER_LOCAL_STORAGE, JSON.stringify(items));//pass the items as a string stringify
}


// get items from local storage
function getLocalStorage() {
    return localStorage.getItem(PLAYER_LOCAL_STORAGE) === null ||
        localStorage.getItem(PLAYER_LOCAL_STORAGE) === undefined ||
        localStorage.getItem(PLAYER_LOCAL_STORAGE) === "" ? [] : JSON.parse(localStorage.getItem(PLAYER_LOCAL_STORAGE)) // if items return the existing array


}

//remove local storage
function removeLocalStorage(playerID) {
    let items = getLocalStorage();// getting all the items inside local storage
    let newData = items.filter(item => item.itemID != playerID) //FILTER function it create a new array and add items not equal to player id
    //add new array to the local storage and replace the old one that has the deleted item
    localStorage.setItem(PLAYER_LOCAL_STORAGE, JSON.stringify(newData));
}

function loadStorageItems() {
    let items = getLocalStorage();
    //loop and append to dom
    items.forEach(item => addNewCard(item))

}
