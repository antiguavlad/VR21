const form = document.querySelector('.js-form');
form.addEventListener('submit', handleSubmit);
const nextBtn = document.querySelector('.js-next');
const prevBtn = document.querySelector('.js-prev');
let resultStats = document.querySelector('.js-result-stats');
const spinner = document.querySelector('.js-spinner');
let totalResults;
let currentPage = 1;
let searchQuery;

const apiKey = "bPWVNq3Jw4IKnzObHBgDiC8KoAXPCl7oXg1ldS8TxgU";//"Your API key";

nextBtn.addEventListener('click', () => {
    currentPage += 1;
    fetchResults(searchQuery);
});

prevBtn.addEventListener('click', () => {
    currentPage -= 1;
    fetchResults(searchQuery);
});

function pagination(totalPages) {
    nextBtn.classList.remove('hidden');
    if (currentPage >= totalPages) {
        nextBtn.classList.add('hidden');
    }

    prevBtn.classList.add('hidden');
    if (currentPage !== 1) {
        prevBtn.classList.remove('hidden');
    }
}

async function fetchResults(searchQuery) {
    spinner.classList.remove('hidden');
    try {
        const results = await searchUnsplash(searchQuery);
        pagination(results.total_pages);
        console.log(results);
        displayResults(results);
    } catch (err) {
        console.log(err);
        alert('Failed to search Unsplash');
    }
    spinner.classList.add('hidden');
}

function handleSubmit(event) {
    event.preventDefault();
    currentPage = 1;
    const inputValue = document.querySelector('.js-search-input').value;
    searchQuery = inputValue.trim();
    console.log(searchQuery);
    fetchResults(searchQuery);
}
//https://unsplash.com/documentation
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
async function searchUnsplash(searchQuery) {
    const endpoint = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=30&page=${currentPage}&client_id=${apiKey}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

function displayResults(json) {
    const searchResults = document.querySelector('.search-results');
    searchResults.textContent = '';
    json.results.forEach(result => {
        const url = result.urls.small;
        const unsplashLink = result.links.html;
        const photographer = result.user.name;
        const photographerPage = result.user.links.html;
        searchResults.insertAdjacentHTML(
            'beforeend',
            `<div>
        <a href="${unsplashLink}" target="_blank">
          <div class="result-item" style="background-image: url(${url});"></div>
        </a>
        <p class="photographer-name">
          <a href="${photographerPage}" target="_blank" style="color: black; text-decoration: none;">Photo by ${photographer}</a>
        </p>
      </div>`
        );
    });
    totalResults = json.total;
    resultStats.textContent = `About ${totalResults} results found`;
};






//THIS IS THE SUDO CODE TO DO THE API PROCESS ABOVE
//1. get api key
//2. capture search term

//3. make a request to unsplash api by using fetch which use HTTP request 
//4. capture the API data
//5. loop over the data and 
//6. append to the DOM

//const client_id = ""; // for the API key
// I am using my keys from the unsplash: 

// const client_id = "bPWVNq3Jw4IKnzObHBgDiC8KoAXPCl7oXg1ldS8TxgU";
// //capture the search term by using const searchStr = "";
// const searchStr = "NBA Players";

// //fetch takes takes a resources which is a url perform the git request
// //accesskey client_id=${client_id}
// //query: query=${searchStr}
// fetch(
//     `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`
// )

//     //we get the promise by using .then indicate returning a promise
//     //receive response   return response
//     .then((response) => response.json()) //return a response in json
//     // second .then is to do the work
//     .then((data) => {
//         // to capture the data container to append the images 
//         const container = document.querySelector(".container");
//         // looping over the container wit hthe data captured in the data variable  
//         for (let i = 0; i < data.results.length - 1; i++) {
//             const img = document.createElement("img");
//             img.setAttribute("src", data.results[i].urls.thumb);
//             // appending the images to the container in the html
//             container.append(img);
//         }
//     });

// //to do a curl on the terminal to see if the api is working:
// //https://api.unsplash.com/search/photos?query=NBA+Players&per_page=20&client_id=bPWVNq3Jw4IKnzObHBgDiC8KoAXPCl7oXg1ldS8TxgU
// //url
// //endpoint
// // query  = ?
// //concatenated by =  &
// // amount of photos to search = per_page=20
// //client id = client_id=${client_id}
// //`https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`

// //THIS IS THE SUDO CODE TO DO THE API PROCESS ABOVE
// //1. get api key
// //2. capture search term

// //3. make a request to unsplash api by using fetch which use HTTP request 
// //4. capture the API data
// //5. loop over the data and 
// //6. append to the DOM


// let cardId = 1; // when the card is created it will give an id starting at 1
// //getting the specific model with its id
// const deleteModal = document.getElementById('deleteModal')
// //add event listerner to the model
// deleteModal.addEventListener('show.bs.modal', setDeleteModalDataAttr);

// document.querySelector("#add-player-form").addEventListener("submit", addNewCard);
// document.querySelector("#confirm-delete").addEventListener("click", deleteCard);

// function setDeleteModalDataAttr(event) {
//     //check who opened the model
//     let cardOpenModel = event.relatedTarget.closest(".col-md-3").id; // closest looking parent with the matching identifier and class

//     // set the model attribute to match the card id that open the model
//     deleteModal.dataset.cardTrigger = cardOpenModel;

// }

// function deleteCard(event) {
//     //getting the value of the data attribute of the model
//     let idToDelete = deleteModal.dataset.cardTrigger;
//     //looking for match in the row
//     let itemToRemove = document.getElementsByClassName("row")[0].querySelector(`#${idToDelete}`)
//     //remove from the DOM
//     itemToRemove.remove();
// }

// function addNewCard(event) {
//     // to prevent the form for submission once the user hit the submit button
//     event.preventDefault();

//     const form = document.querySelector("#add-player-form");
//     let imageSource = form.querySelector("#playerImageUrl").value;
//     let playerName = form.querySelector("#playerName").value;
//     let playerDescription = form.querySelector("#playerDescription").value;

//     const contentCard = `
//                 <div class="col-md-3 col-sm-12" id= "player-${cardId++}" >
//                     <div class="card">
//                         <img
//                             src=${imageSource}
//                             class="card-img-top playerImg" alt="..." />
//                         <div class="card-body">
//                             <h5 class="card-title">${playerName}</h5>
//                             <p class="card-text">
//                                 ${playerDescription}
//                             </p>
//                             <div>
//                                 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
//                                     Update
//                                 </button>
//                                 <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//             </div>`;


//     document
//         .querySelector(".row")
//         .insertAdjacentHTML("beforeend", contentCard);
//     form.reset();

// }





