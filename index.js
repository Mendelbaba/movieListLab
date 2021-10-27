console.log("hello world")


function addMovie(event) {

    event.preventDefault()

    const inputField = document.querySelector("input")

    const movie = document.createElement("li") 

    const movieTitle = document.createElement("span") 

    movieTitle.textContent = inputField.value

    movieTitle.addEventListener("click",crossOffMovie)

    movie.appendChild(movieTitle)

    const deleteButton = document.createElement("button")

    deleteButton.textContent = "x"

    deleteButton.addEventListener("click", deleteMovie)

    movie.appendChild(deleteButton)

    const movieList = document.querySelector("ul")

    movieList.appendChild(movie)

    inputField.value = " "

}

const submitButton = document.querySelector("form")

submitButton.addEventListener("submit", addMovie)

deleteButton.addEventListener("click", deleteMovie)

function deleteMovie(event){
    return event.target.parentNode.remove() 
}

function crossOffMovie(event) {
    event.target.classList.toggle(".checked")
}