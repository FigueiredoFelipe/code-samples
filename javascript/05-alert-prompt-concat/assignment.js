// 1) Create two new functions:
// a) one that takes no parameters and simply shows an <code>alert()</code> with some text of your choice and;
// b) one that receives a name as a parameter and then uses <code>alert()</code> to output that name.

// 2) Call both functions directly from your code.

function greet() {
    alert('Hi there!')
    userName()
    return
}

const userName = function name() {
    const userInput = prompt(`Please insert your name and hit OK.`)
    if (!userInput) {
        alert(`Please start over and insert a valid name.`)
        throw Error('Invalid user name.')
    }
    alert(`Welcome ${userInput}!`)
    return
}

// 3) Add an event listener to task3Element and attach it to the first function (the one without arguments). Click this task thereafter to verify whether it works.

const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click', greet)

// 4) Add a brand-new function that takes three parameters (three strings, give them any names you want) that returns one combined string (where the three strings are concatenated).

function concat(title, name, lastName) {
    const concat = title + name + lastName
    alert(concat)
    return concat
}

// 5)Call that new function directly from your code and alert() the result of that function.

concat('Developer: ', 'Felipe ', 'Figueiredo.')