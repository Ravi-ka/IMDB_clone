// https://www.omdbapi.com/?s=thor&apikey=b2496162 - Search API
// https://img.omdbapi.com/?i=tt1285016&apikey=b2496162 - Image API

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

async function loadMovies(searchTerm){
    const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=b2496162`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(data);
    if(data.Response == "True"){
        displayMovies(data.Search);
    }
}

function displayMovies(){

}

