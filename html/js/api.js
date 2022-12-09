    //THIS IS THE SUDO CODE TO DO THE API PROCESS ABOVE
    //1. get api key
    //2. capture search term
    
    //3. make a request to unsplash api by using fetch which use HTTP request 
    //4. capture the API data
    //5. loop over the data and 
    //6. append to the DOM

    //const client_id = ""; // for the API key
// I am using my keys from the unsplash: 

const client_id = "bPWVNq3Jw4IKnzObHBgDiC8KoAXPCl7oXg1ldS8TxgU";
//capture the search term by using const searchStr = "";
const searchStr = "NBA Players";

//fetch takes takes a resources which is a url perform the git request
//accesskey client_id=${client_id}
//query: query=${searchStr}
fetch(
    `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`
)

    //we get the promise by using .then indicate returning a promise
    //receive response   return response
    .then((response) => response.json()) //return a response in json
    // second .then is to do the work
    .then((data) => {
        // to capture the data container to append the images 
        const container = document.querySelector(".container");
        // looping over the container wit hthe data captured in the data variable  
        for (let i = 0; i < data.results.length - 1; i++) {
            const img = document.createElement("img");
            img.setAttribute("src", data.results[i].urls.thumb);
            // appending the images to the container in the html
            container.append(img);
        }
    });

    //url
    //endpoint
    // query  = ?
    //concatenated by =  &
    // amount of photos to search = per_page=20
    //client id = client_id=${client_id}
    //`https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`

    //THIS IS THE SUDO CODE TO DO THE API PROCESS ABOVE
    //1. get api key
    //2. capture search term
    
    //3. make a request to unsplash api by using fetch which use HTTP request 
    //4. capture the API data
    //5. loop over the data and 
    //6. append to the DOM


