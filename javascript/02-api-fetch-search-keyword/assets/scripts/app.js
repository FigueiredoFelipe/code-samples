// 2) - Create a small web application that:
// a) uses an API to fetch data and;
// b) display it on the page.
// The application should have:
// c) a search bar that allows the user to:
// d) search for data based on a keyword.

// if IE, USE ANOTHER BROWSER



const movies = []

async function fetchDataAwait() {
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json()

    return data
}


const titles = fetchDataAwait;
const displayMovie = document.getElementById('movies-list')


titles().then(data => {
    const results = data.results
    results.map((movie) => {
        movies.push(movie)

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card">
        <div class="card-title">
            <h1>${movie.title}</h1>
        </div>
        <div class="card-body">
            <p class="opening_crawl">${movie.opening_crawl}
            </p>
            <p class="release_date">Release Date: ${movie.release_date}</p>
        </div>
        </div>
        `
        displayMovie.appendChild(div)
    })
}).catch(error => console.log(error))





const input = document.querySelector('#inp')
const button = document.getElementById('fetch-btn')


function handleFilter() {

    const filterInput = input.value.trim().toLowerCase()
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filterInput))

    console.log(filteredMovies);

    displayMovie.innerHTML = ''

    filteredMovies.map((movie) => {
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="card">
        <div class="card-title">
            <h1>${movie.title}</h1>
        </div>
        <div class="card-body">
            <p class="opening_crawl">${movie.opening_crawl}
            </p>
            <p class="release_date">Release Date: ${movie.release_date}</p>
        </div>
        </div>
        `
        displayMovie.appendChild(div)
    })
}

button.addEventListener('click', handleFilter)