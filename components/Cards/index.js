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

const cardSection = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(info => {
        const articles = info.data.articles;
        const articleInfo = Object.keys(articles);

        articleInfo.map(topic => {
            articles[`${topic}`].map(article => {
                cardSection.appendChild(cardCreator(article));
            });
        });
    });

function cardCreator(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const profile = document.createElement('div');
    const imageContainer = document.createElement('div');
    const headshot = document.createElement('img');
    const byLine = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    profile.classList.add('author');
    imageContainer.classList.add('img-container');

    headline.textContent = data.headline;
    headshot.src = data.authorPhoto;
    byLine.textContent = data.authorName;

    card.appendChild(headline);
    card.appendChild(profile);
    profile.appendChild(imageContainer);
    profile.appendChild(byLine);
    imageContainer.appendChild(headshot);

    return card;
};