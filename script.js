"use strict"

const numberOfFilms = +prompt("Скільки фільмів ви бачили?", "");

let personalMovieasDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieasDB.count);

const movieName = prompt("Останній переглянутий фільм?", "");
console.log(movieName);
const movieRating = prompt("На скільки оцінете його?", "");

personalMovieasDB.movies[movieName] = movieRating;
console.log(personalMovieasDB.movies);
console.log(typeof(personalMovieasDB.movies.movieRating));