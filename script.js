"use strict"

const numberOfFilms = +prompt("Скільки фільмів ви бачили?", "");

let personalMovieasDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {

    const a = prompt("Останній переглянутий фільм?", ""),
          b = prompt("На скільки оцінете його?", "");
    if (a !== null && b!== null && a !=='' && b !== '' && a.length < 50) {
        personalMovieasDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieasDB.count < 10) {
    console.log("Переглянуто доволі мало фільмів") 
} else if (personalMovieasDB.count >= 10 && personalMovieasDB.count <= 30) {
    console.log("Ви класний глядач!") 
} else if (personalMovieasDB.count > 30) {
    console.log("Ви кіноман") 
} else {
    console.log("Виникла помилка") 
}

console.log(personalMovieasDB);