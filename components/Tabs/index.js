// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.tabs');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(function(working) {
        console.log(working);
    })
    .catch(function(error) {
        console.log(error);
    });

function tabMaker() {
    const tabs = document.createElement('div');
    const topics = document.createElement('div');
    const title = document.createElement('span');

    tabs.classList.add('tabs');
    topics.classList.add('topics');
    title.classList.add('title');

    title.textContent = `TRENDING TOPICS: ${obj.topics}`;

    tabs.appendChild(topics);
    tabs.appendChild(title);

    return tabs;
}