// {/* <script>

/* EXERCISE 1
Write a function for changing the title of the document in something else.
*/

function changeTitle(newTitle) {
  const pageTitle = document.createElement(`title`);
  pageTitle.innerText = `D7 Homework Page`;
  const container = document.getElementsByTagName(`head`)[0];
  container.appendChild(pageTitle);
}

/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/

function addClassToTitle() {
  const element = document.querySelector(`h1`);
  element.classList.add("myHeading");
}

// /* EXERCISE 3
// Write a function for changing the text of only the p which are children of a div.
// */

function changePcontent() {
  const pInDivs = document.querySelectorAll(`div p`);
  pInDivs.forEach((div) => (div.style.color = "blue"));
}

// /* EXERCISE 4
// Write a function for changing the destination of every link to https://www.google.com
// */

function changeUrls() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => (link.href = "https://www.google.com"));
}

//  /* EXERCISE 5
//  Write a function for adding a new item in the second list.
//  */

function addToTheSecond(content) {
  const li = document.createElement("li");
  li.innerText = content;
  console.log(li);
  const ul = document.getElementById("secondList");
  ul.appendChild(li);
}

// /* EXERCISE 6
// Write a function for adding a second paragraph to the div.
// */

function addParagraph(content) {
    const secondParagraph = document.createElement(`p`);
    secondParagraph.innerText = content;
    const divContainer = document.querySelector(`div`);
    divContainer.appendChild(secondParagraph);
}

// /* EXERCISE 7
// Write a function for making the first UL disappear.
// */

function firstUlDisappear() {
    // const firstUl = document.querySelectorAll(`ul`)[0];
    //  OR
    const firstUl = document.getElementById(`firstList`);
    firstUl.style.display = `none`;
}

// /* EXERCISE 8
// Write a function for making the background of every UL green.
// */

function paintItGreen(){
    const everyUl = document.getElementsByTagName(`ul`);
    console.log(everyUl)
    // everyUl.forEach(item => (item.style.backgroundColor = `green`));
    for (let i = 0; i < everyUl.length; i++) {
        everyUl[i].style.backgroundColor = `green`;
    }
}

// /* EXERCISE 9
// Make the heading of the page change color every time the user clicks on it.
// */

// function makeItClickable(){
//     const everyColour = 
//     const headingColour = document.querySelector(`h1`)
//     headingColour.addEventListener(`click`, everyColour);

// }

// /* EXERCISE 10
// Change the footer text with something else when the user clicks on it.
// */

// function changeFooterText(){

// }

// /* EXERCISE 11
// Attach an event listener to the input field in the page for console logging its value just after any keystroke.
// */

// const inputField = document.getElementById('input-field')
// ...

// /* EXERCISE 12
// Create a new welcome alert message when the page successfully loads.
// */

// window.onload = function(){

// }

// /* EXERCISE 13
// Use HTML5 tags to divide the content of the page in a more semantic way.
// */
// </script> */}
