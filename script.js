"use strict"

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Скільки фільмів ви бачили?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt("Скільки фільмів ви бачили?", "");
    }
}

start();

let personalMovieasDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Останній переглянутий фільм?", ""),
              b = prompt("На скільки оцінете його?", "");
        if (a !== null && b!== null && a !=='' && b !== '' && a.length < 50) {
            personalMovieasDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieasDB.count < 10) {
        console.log("Переглянуто доволі мало фільмів") 
    } else if (personalMovieasDB.count >= 10 && personalMovieasDB.count <= 30) {
        console.log("Ви класний глядач!") 
    } else if (personalMovieasDB.count > 30) {
        console.log("Ви кіноман") 
    } else {
        console.log("Виникла помилка") 
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieasDB.privat == false) {
        console.log(personalMovieasDB);
    }
}

function writeYourGemres() {
    for (let i = 0; i < 3; i++) {
        personalMovieasDB.genres[i] = prompt(`Який ваш улюблений жанр під номером ${i+1}`);
    }
}

writeYourGemres();

console.log(personalMovieasDB);