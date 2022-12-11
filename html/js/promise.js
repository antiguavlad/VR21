// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// /**
//  * 
//  * 
//  * Promise

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// To learn about the way promises work and how you can use them, we advise you to read Using promises first.
// Description

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

//     pending: initial state, neither fulfilled nor rejected.
//     fulfilled: meaning that the operation was completed successfully.
//     rejected: meaning that the operation failed.

// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

// A promise is said to be settled if it is either fulfilled or rejected, but not pending.

// Flowchart showing how the Promise state transitions between pending, fulfilled, and rejected via then/catch handlers. A pending promise can become either fulfilled or rejected. If fulfilled, the "on fulfillment" handler, or first parameter of the then() method, is executed and carries out further asynchronous actions. If rejected, the error handler, either passed as the second parameter of the then() method or as the sole parameter of the catch() method, gets executed. 

// **/

// //Promises

// function myFunction() {
//     console.log("Hello 1");
//     setTimeout(() => {
//         console.log("Hello 2");
//     }, 3000);
//     console.log("Hello 3");
// }

// console.log(myFunction());


// const myPromise = new Promise((resolveOuter) => {
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(resolveInner, 1000);
//         })
//     );
// });

// const myPromise2 = Promise((resolve) => {
//     resolve("Hello World")
// });

// myPromise.then(val => console.log(valueOf))


// const myPromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("My data is resolved"); // resolve is a function

//     }, 3000)// this represent 3 secs the delay in response from the server

// });

// // we cannot get the data until it fullfill
// // to get the answer from the promise we use the .then to get the data from the resolver("My data is resolved")
// myPromise3.then(data => {
//     //append some data to the DOM:
//     console.log("Then data: ", data);
// }).catch(e => {
//     debugger;
//     throw new Error(e);
// });


//promises under the hood: 


// const myPromise4 = new Promise((resolve, reject) => {
//     resolve("My resolver function");
// });

// myPromise4.then(data => {
//     console.log(data)
// });

// used for xml http request 
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// try to implement this API into the NBA Players project: 

//fetch return a promise 
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     //append data to DOM to our page
//     .then(json => {
//         console.log(json)
//         const container = document.querySelector(".container");

//         //debugger;

//         for (let i = 0; i < json.length - 1; i++) {
//             const p = document.createElement("p");
//             p.innerText = json[i].title;

//             container.append(p);

//         }

//     });




// Hitting the API: in the terminal


/***
 * 
 * js git:(main) node promise.js
(node:88774) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
[
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952'
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796'
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355'
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776'
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97'
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    url: 'https://via.placeholder.com/600/56a8c2',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2'
  },
  {
    albumId: 1,
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc'
  },
  {
    albumId: 1,
    id: 8,
    title: 'aut porro officiis laborum odit ea laudantium corporis',
    url: 'https://via.placeholder.com/600/54176f',
    thumbnailUrl: 'https://via.placeholder.com/150/54176f'
  },
  {
    albumId: 1,
    id: 9,
    title: 'qui eius qui autem sed',
    url: 'https://via.placeholder.com/600/51aa97',
    thumbnailUrl: 'https://via.placeholder.com/150/51aa97'
  },
  {
    albumId: 1,
    id: 10,
    title: 'beatae et provident et ut vel',
    url: 'https://via.placeholder.com/600/810b14',
    thumbnailUrl: 'https://via.placeholder.com/150/810b14'
  },
  {
    albumId: 1,
    id: 11,
    title: 'nihil at amet non hic quia qui',
    url: 'https://via.placeholder.com/600/1ee8a4',
    thumbnailUrl: 'https://via.placeholder.com/150/1ee8a4'
  },
  {
    albumId: 1,
    id: 12,
    title: 'mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores',
    url: 'https://via.placeholder.com/600/66b7d2',
    thumbnailUrl: 'https://via.placeholder.com/150/66b7d2'
  },
  {
    albumId: 1,
    id: 13,
    title: 'repudiandae iusto deleniti rerum',
    url: 'https://via.placeholder.com/600/197d29',
    thumbnailUrl: 'https://via.placeholder.com/150/197d29'
  },
  {
    albumId: 1,
    id: 14,
    title: 'est necessitatibus architecto ut laborum',
    url: 'https://via.placeholder.com/600/61a65',
    thumbnailUrl: 'https://via.placeholder.com/150/61a65'
  },
  {
    albumId: 1,
    id: 15,
    title: 'harum dicta similique quis dolore earum ex qui',
    url: 'https://via.placeholder.com/600/f9cee5',
    thumbnailUrl: 'https://via.placeholder.com/150/f9cee5'
  },
  {
    albumId: 1,
    id: 16,
    title: 'iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt',
    url: 'https://via.placeholder.com/600/fdf73e',
    thumbnailUrl: 'https://via.placeholder.com/150/fdf73e'
  },
  {
    albumId: 1,
    id: 17,
    title: 'natus doloribus necessitatibus ipsa',
    url: 'https://via.placeholder.com/600/9c184f',
    thumbnailUrl: 'https://via.placeholder.com/150/9c184f'
  },
  {
    albumId: 1,
    id: 18,
    title: 'laboriosam odit nam necessitatibus et illum dolores reiciendis',
    url: 'https://via.placeholder.com/600/1fe46f',
    thumbnailUrl: 'https://via.placeholder.com/150/1fe46f'
  },
  {
    albumId: 1,
    id: 19,
    title: 'perferendis nesciunt eveniet et optio a',
    url: 'https://via.placeholder.com/600/56acb2',
    thumbnailUrl: 'https://via.placeholder.com/150/56acb2'
  },
  {
    albumId: 1,
    id: 20,
    title: 'assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error',
    url: 'https://via.placeholder.com/600/8985dc',
    thumbnailUrl: 'https://via.placeholder.com/150/8985dc'
  },
  {
    albumId: 1,
    id: 21,
    title: 'ad et natus qui',
    url: 'https://via.placeholder.com/600/5e12c6',
    thumbnailUrl: 'https://via.placeholder.com/150/5e12c6'
  },
  {
    albumId: 1,
    id: 22,
    title: 'et ea illo et sit voluptas animi blanditiis porro',
    url: 'https://via.placeholder.com/600/45601a',
    thumbnailUrl: 'https://via.placeholder.com/150/45601a'
  },
  {
    albumId: 1,
    id: 23,
    title: 'harum velit vero totam',
    url: 'https://via.placeholder.com/600/e924e6',
    thumbnailUrl: 'https://via.placeholder.com/150/e924e6'
  },
  {
    albumId: 1,
    id: 24,
    title: 'beatae officiis ut aut',
    url: 'https://via.placeholder.com/600/8f209a',
    thumbnailUrl: 'https://via.placeholder.com/150/8f209a'
  },
  {
    albumId: 1,
    id: 25,
    title: 'facere non quis fuga fugit vitae',
    url: 'https://via.placeholder.com/600/5e3a73',
    thumbnailUrl: 'https://via.placeholder.com/150/5e3a73'
  },
  {
    albumId: 1,
    id: 26,
    title: 'asperiores nobis voluptate qui',
    url: 'https://via.placeholder.com/600/474645',
    thumbnailUrl: 'https://via.placeholder.com/150/474645'
  },
  {
    albumId: 1,
    id: 27,
    title: 'sit asperiores est quos quis nisi veniam error',
    url: 'https://via.placeholder.com/600/c984bf',
    thumbnailUrl: 'https://via.placeholder.com/150/c984bf'
  },
  {
    albumId: 1,
    id: 28,
    title: 'non neque eligendi molestiae repudiandae illum voluptatem qui aut',
    url: 'https://via.placeholder.com/600/392537',
    thumbnailUrl: 'https://via.placeholder.com/150/392537'
  },
  {
    albumId: 1,
    id: 29,
    title: 'aut ipsam quos ab placeat omnis',
    url: 'https://via.placeholder.com/600/602b9e',
    thumbnailUrl: 'https://via.placeholder.com/150/602b9e'
  },
  {
    albumId: 1,
    id: 30,
    title: 'odio enim voluptatem quidem aut nihil illum',
    url: 'https://via.placeholder.com/600/372c93',
    thumbnailUrl: 'https://via.placeholder.com/150/372c93'
  },
  {
    albumId: 1,
    id: 31,
    title: 'voluptate voluptates sequi',
    url: 'https://via.placeholder.com/600/a7c272',
    thumbnailUrl: 'https://via.placeholder.com/150/a7c272'
  },
  {
    albumId: 1,
    id: 32,
    title: 'ad enim dignissimos voluptatem similique',
    url: 'https://via.placeholder.com/600/c70a4d',
    thumbnailUrl: 'https://via.placeholder.com/150/c70a4d'
  },
  {
    albumId: 1,
    id: 33,
    title: 'culpa ipsam nobis qui fuga magni et mollitia',
    url: 'https://via.placeholder.com/600/501fe1',
    thumbnailUrl: 'https://via.placeholder.com/150/501fe1'
  },
  {
    albumId: 1,
    id: 34,
    title: 'vitae est facere quia itaque adipisci perferendis id maiores',
    url: 'https://via.placeholder.com/600/35185e',
    thumbnailUrl: 'https://via.placeholder.com/150/35185e'
  },
  {
    albumId: 1,
    id: 35,
    title: 'tenetur minus voluptatum et',
    url: 'https://via.placeholder.com/600/c96cad',
    thumbnailUrl: 'https://via.placeholder.com/150/c96cad'
  },
 * 
 * 
 * **/



// // attaching an image from the API: 
// //fetch return a promise 
// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   //append data to DOM to our page
//   .then(json => {
//     console.log(json)
//     const container = document.querySelector(".container");

//     //debugger;

//     for (let i = 0; i < json.length - 1; i++) {
//       const p = document.createElement("img");
//       img.setAttribute("src", json[i].url)
//       // p.innerText = json[i].title;

//       container.append(p);

//     }

//   });


const client_id = ""; // Create an account unsplash tp hey client ID;

fetch(
  `https://api.unsplash.com/search/photos?query=cars&per_page=20&client_id=${client_id}`
)
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".container");

    for (let i = 0; i < data.results.length - 1; i++) {
      const img = document.createElement("img");

      img.setAttribute("src", data.results[i].urls.thumb);

      container.append(img);
    }
  });


