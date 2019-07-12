// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function(working) {
        console.log(working);
    })
    .catch(function(error) {
        console.log(error);
    });

function cardCreator() {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const profile = document.createElement('div');
    const imageContainer = document.createElement('div');
    const headshot = document.createElement('img');
    const byLine = document.createElement('span');
    const author = document.createElement('div');

    headline.textContent = obj.headline;
    headshot.src = obj.authorPhoto;
    temperature.textContent = `By ${obj.authorName}`;

    card.appendChild(dateBar);
    wholeHeader.appendChild(title);
    wholeHeader.appendChild(temperature);

    wholeHeader.classList.add('cards-container');

    return wholeHeader;
};