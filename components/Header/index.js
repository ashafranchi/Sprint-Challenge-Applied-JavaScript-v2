// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const wholeHeader = document.createElement('div');
    const dateBar = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span');

    dateBar.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    wholeHeader.appendChild(dateBar);
    wholeHeader.appendChild(title);
    wholeHeader.appendChild(temperature);

    wholeHeader.classList.add('header-container');

    return wholeHeader;
}