"use strict"

let personalMovieasDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieasDB.count = +prompt("Скільки фільмів ви бачили?", "");
     
         while (personalMovieasDB.count == '' || personalMovieasDB.count == null || isNaN(personalMovieasDB.count) ) {
            personalMovieasDB.count = +prompt("Скільки фільмів ви бачили?", "");
         }
     },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Останній переглянутий фільм?", ""),
                  b = prompt("На скільки оцінете його?", "");
            if (a !== null && b!== null && a !=='' && b !== '' && a.length < 50) {
                personalMovieasDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieasDB.count < 10) {
            console.log("Переглянуто доволі мало фільмів") 
        } else if (personalMovieasDB.count >= 10 && personalMovieasDB.count <= 30) {
            console.log("Ви класний глядач!") 
        } else if (personalMovieasDB.count > 30) {
            console.log("Ви кіноман") 
        } else {
            console.log("Виникла помилка") 
        }
    },
    writeYourGemres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieasDB.genres[i] = prompt(`Який ваш улюблений жанр під номером ${i+1}`);
            while (personalMovieasDB.genres[i] == '' || personalMovieasDB.genres[i] == null) {
                personalMovieasDB.genres[i] = prompt(`Який ваш улюблений жанр під номером ${i+1}`);
            }
        }
        personalMovieasDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр #${i+1} - це ${item}`)
        })
    },
    showMyDB: function() {
        if (personalMovieasDB.privat == false) {
            console.log(personalMovieasDB);
        }
    },
    toggleVisibleDB: function() {
        personalMovieasDB.privat == false ? personalMovieasDB.privat = true : personalMovieasDB.privat = false;
    }
};