
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('http://httpstat.us/500')
//   .catch(alert); // Error: 500

async function loadJsonAsync(url) {
    let response = await fetch(url);
    
    if(response.status == 200) {
        let data = await response.text();
        return data;
    }
    throw new Error(response.status);
   } 

try{

let res = await loadJsonAsync('http://httpstat.us/500');
console.log(res)
} catch(error) {
    console.log('we got an error')
}


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {

    wait().then(result => alert(result));

    // ...what should you write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await" 
  //   This has already been solved already, checking the slides in Exercise two, so the question above is no longer relevant
  }

  f();