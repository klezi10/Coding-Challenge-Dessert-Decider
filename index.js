const btn = document.getElementById('btn');
btn.addEventListener('click', findYum);

function findYum(event) {
  fetch('https://foodish-api.herokuapp.com/api/images/dessert')
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById('foodHolder').innerHTML = `
        <img src="${data.image}" />
        `)
    );
}

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

*/
