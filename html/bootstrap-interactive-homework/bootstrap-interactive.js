//image validation: 

let cardId = 1; // when the card is created it will give an id starting at 1
//getting the specific model with its id
const deleteModal = document.getElementById('deleteModal')
//add event listerner to the model
deleteModal.addEventListener('show.bs.modal', setOpenModalDataAttr);

const updateModal = document.getElementById('updateModal');
updateModal.addEventListener('show.bs.modal', setOpenModalDataAttr);

document.querySelector("#updatePlayerForm").addEventListener("submit", updateExistingCard);

document.querySelector("#add-player-form").addEventListener("submit", addNewCard);
document.querySelector("#confirm-delete").addEventListener("click", deleteCard);

function updateExistingCard(event) {
    event.preventDefault();
    let idToUpdate = updateModal.dataset.cardTrigger;
    console.log(idToUpdate)
    //change the existing container from the form and change the inner html of the card
    let itemToUpdate = document.getElementsByClassName("row")[0].querySelector(`#${idToUpdate}`)

    const form = document.querySelector("#updatePlayerForm");
    let imageSource = form.querySelector("#updateImageUrl").value;
    let playerName = form.querySelector("#updatePlayerName").value;
    let playerDescription = form.querySelector("#updateDescription").value;

    //update image source
    itemToUpdate.querySelector(".playerImg").src = imageSource;
    //update player name
    itemToUpdate.querySelector(".card-title").innerHTML = playerName;
    //update description
    itemToUpdate.querySelector(".card-text").innerHTML = playerDescription;
    //empty form
    form.reset();
    //To close on save
    form.querySelector("[data-bs-dismiss='modal']").click();
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
}

function addNewCard(event) {
    // to prevent the form for submission once the user hit the submit button
    event.preventDefault();

    const form = document.querySelector("#add-player-form");
    let imageSource = form.querySelector("#playerImageUrl").value;
    let playerName = form.querySelector("#playerName").value;
    let playerDescription = form.querySelector("#playerDescription").value;

    const contentCard = `
            <div class="col-md-3 col-sm-12" id= "player-${cardId++}" >
                <div class="card">
                    <img
                        src=${imageSource}
                        class="card-img-top playerImg" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${playerName}</h5>
                        <p class="card-text">
                            ${playerDescription}
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
    form.reset();

}





