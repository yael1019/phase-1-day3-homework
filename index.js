//TODO: Look at the HTML and see what id you need to access

//TODO: Open your json server
//! If you need to a refresher on this, the command for this is
//! pineed to the slack channel
//TODO: Fetch the cats that exist in the database
//TODO: Create a div element for each cat and append to "cat-container"
//TODO: Iterate through your data and add it to the cat div,
//TODO: Create an h3, img, and p tag to hold your data and
//TODO: append it to the created div
//////////////////////////////////////////////////////////////
// create a constant for the cat div
const catDiv = document.getElementById('cat-container');
const detailImage = document.getElementById('datail-image');

// one way of using fetch and calling json
// async function cats() {
//     const response = await fetch('http://localhost:3000/cats');
//     const data = await response.json();
    // console.log(respnse);
    // console.log(data);
// }
// cats();

// second way of using fetch and calling json
fetch('http://localhost:3000/cats')
.then(response => response.json())
.then(cats => {
    // in the div #detail-image we want to show the first cat when you reload the page
    detailImage.src = cats[0].image
    cats.forEach(cat => {
    // create a div for the cat
    const div = document.createElement('div');
    // append the div to catDiv
    catDiv.append(div);
    // create an h3 tag and set it to the name of the cat
    const h3 = document.createElement('h3');
    h3.innerText = cat.name;
    // create an img tag an set it to the image of the cat
    const img = document.createElement('img');
    img.src = cat.image;
    // create a p tag and set it to the breed of the cat
    const p = document.createElement('p');
    p.innerText = cat.breed;
    // append each tag to the div tag
    div.append(h3);
    div.append(img);
    div.append(p);
    // here we are setting an event listener so that when we click any of the cat divs it will show up in the #detail-image div
    div.addEventListener('click', () => {
        detailImage.src = cat.image;
    })
})
})









//////////////////////////////////////////////////////////////
//TODO: Fetch again and repeat to add dogs to the "dog-container"
//////////////////////////////////////////////////////////////
const dogDiv = document.getElementById('dog-container');
const showImage = document.getElementById('show-image');

async function fetchThis() {
    const respnse = await fetch('http://localhost:3000/dogs');
    const dogs = await respnse.json();
    // console.log(dogs);
    showImage.src = dogs[0].image;
    dogs.forEach(dog => {
        const div = document.createElement('div');
        dogDiv.append(div);
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const p = document.createElement('p');
        div.append(h3);
        div.append(img);
        div.append(p);
        h3.innerText = dog.name;
        img.src = dog.image;
        p.innerText = dog.breed;
        div.addEventListener('click', () => {
            showImage.src = dog.image;
        })
    })
}

fetchThis();

















//////////////////////////////////////////////////////////////