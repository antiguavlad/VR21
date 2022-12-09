// I am using my keys from the unsplash: 

const client_id = "bPWVNq3Jw4IKnzObHBgDiC8KoAXPCl7oXg1ldS8TxgU";
const searchStr = "NBA Players";


fetch(
    `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`
)

    //we get the promise by using .then indicate returning a promise
    .then((response) => response.json())
    // second .then is to do the work
    .then((data) => {
        // container
        const container = document.querySelector(".container");
        // looping over the container: 
        for (let i = 0; i < data.results.length - 1; i++) {
            const img = document.createElement("img");
            img.setAttribute("src", data.results[i].urls.thumb);

            container.append(img);
        }
    });

    //url
    //endpoint
    // query  = ?
    //concatenated by =  &
    //`https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`
