// ## 3 - Given an HTML document with a button and a paragraph element;
// a) write JavaScript code to add an event listener to the button that;
// b) changes the text of the paragraph element when the button is clicked.

const button = this.document.querySelector('button');
const paragraph = this.document.querySelector('p')

function changeText() {

    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let text = '';

    for (let i = 0; i < 6; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    paragraph.innerText = text

    return text
}



button.addEventListener('click', changeText)