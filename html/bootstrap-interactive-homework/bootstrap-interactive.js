// How do I create an element:
// const cardColumn = document.createElement("div"); // in order to create the element = pass the element in this case is the div
// cardColumn.setAttribute("class", "col-md-3 one two three"); //one two three represent multiple classes in one 
// cardColumn.innerHTML = "My Card NBA-Player";


// //How do I append an element
// const row = document.querySelector(".row");
// row.append(cardColumn);

// Steps of the interactive bootstrap homework: 

// create a div using the element
// set class name using setAttribute
// add placeholder text using innerText

// select element you want to append data 
// pass in element 
// run program




// document.getElmentById('add-button');
// document.querySelector("#add-button").innerHTML = "Add New Player"
// document.querySelector('.card-title').innerHTML = "BASKETBALL CHANGED TITLE" //changed dynamically the .card-title dynamically
// // document.querySelector("#add-button").addEventListener("click", (e) => ){}

//adding the card dynamically: 

// const contentCard = `

// <div class="col-md-3">
//       <div class="card">
//         <img
//           src="https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/utgfcacoxl6hwd2bj2ay/10-most-influential-nba-players-2022-original-nonw?fimg-ssr-default"
//           class="card-img-top" alt="..." />
//         <div class="card-body">
//           <h5 class="card-title">NBA PLAYERS</h5>
//           <p class="card-text">
//             Some quick example text to build on the NBA PLAYERS and make up
//             the bulk of the card's content.
//           </p>
//           <div>
//             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
//               Update
//             </button>
//             <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>  
// `;

// document.querySelector('.row').innerHTML = contentCard;

// this is the most preferred way to add the event listener
// document.querySelector("#add-button").addEventListener("click", (e) => {
//     console.log("Add new NBA Player card") //is printing Add new NBA Player card
//     const div = document.createElement('div');
//     div.innerText = "My info card";

//     document.querySelector(".row").append(div)
//     // console.log("new NBA - PLAYER ADDED")
// });

// another way to query below
// const addCard = () => {
//     console.log("added another NBA-player card using onclick method")
// }

// working adding all the card for the NBA players: 

//------------------------------------------------//

document.querySelector("#add-button").addEventListener("click", (e) => {

    // document.querySelector("#add-button").addEventListener("show.bs.model", (e) => {
    const contentCard = `
    <div class="col-md-3">
        <div class="card">
            <img
                src="https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/utgfcacoxl6hwd2bj2ay/10-most-influential-nba-players-2022-original-nonw?fimg-ssr-default"
                class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">NBA PLAYERS</h5>
                <p class="card-text">
                    Some quick example text to build on the NBA PLAYERS and make up
                    the bulk of the card's content.
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

});


//--------------------------------------------------------------------------------------//


// ANOTHER WAY TO ADD THE COLUMNS AND CARDS BELOW: is adding manually using vanilla JavaScript
