"use strict"

const numberOfFilms = +prompt("Скільки фільмів ви бачили?", "");

let personalMovieasDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Останній переглянутий фільм?", ""),
      b = prompt("На скільки оцінете його?", ""),
      c = prompt("Останній переглянутий фільм?", ""),
      d = prompt("На скільки оцінете його?", "");

personalMovieasDB.movies[a] = b;
personalMovieasDB.movies[c] = d;