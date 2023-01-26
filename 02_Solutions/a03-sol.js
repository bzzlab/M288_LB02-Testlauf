/*
Aufgabe: Flow control
Ergänzen Sie die mit ?? gekennzeichneten Lücken, um Geld abzuheben oder den Bankomat zu verlassen.
Halten Sie sich für die Umsetzung an die Kommentare.
Als Lösung geben Sie den Programmcode zwischen Begin und End ab.

Mögliche Szenarien:
$ node a03-sol.js
Bankomat: Herzlich Willkommen:
Möchten Sie Geld abheben (1) oder verlassen (RETURN):
Keine Wahl getroffen. Sie sind abgemeldet!

$ node a03-sol.js
Bankomat: Herzlich Willkommen:
Möchten Sie Geld abheben (1) oder verlassen (RETURN): 1
Ihr aktueller Kontostand ist 1200.
Wieviel möchten Sie abheben?: 300
Ihr aktueller Kontostand ist 900.
Auf wiedersehen!


$ node a03-sol.js
Bankomat: Herzlich Willkommen:
Möchten Sie Geld abheben (1) oder verlassen (RETURN): 1
Ihr aktueller Kontostand ist 1200.
Wieviel möchten Sie abheben?: 1500
Sie überziehen Ihr Jugend-Konto, was nicht erlaubt.
Auf wiedersehen!


*/
//--Begin
//Modul importieren
let readline = require('readline-sync');
//Kontostand auf 1200 setzen
let balance = 1200;
//Willkommensmeldung
console.log(`Bankomat: Herzlich Willkommen:`)
//Fragen, was der Benutzer wählt (choice).
const choice = readline.question("Möchten Sie Geld abheben (1) oder verlassen (RETURN): ");
//Falls choice undefiniert oder die Länge von choice gleich Null ist ...
if (choice === undefined || choice.length === 0){ //??
    //... dann die Meldung ausgeben: Keine Wahl getroffen. Sie sind abgemeldet!
    console.log(`Keine Wahl getroffen. Sie sind abgemeldet!`);//??
//Sonst ...
} else {//??
    //Falls choice gleich 1 ...
    if (choice === "1") {//??
        //... dann fragen, wieviel der Benutzer abheben möchte (withdraw_money).
        const withdraw_money
            = readline.question(`Ihr aktueller Kontostand ist ${balance}.\nWieviel möchten Sie abheben?: `);
        //Falls withdraw_money undefiniert oder dessen Länge Null ist ...
        if (withdraw_money === undefined || withdraw_money.length === 0){ //??
            //... dann die Meldung ausgeben: Keine Wahl getroffen. Sie sind abgemeldet!
            console.log(`Keine Wahl getroffen. Sie sind abgemeldet.`);
        //Sonst-Falls withdraw_money kleiner gleich als balance ist ...
        } else if (parseInt(withdraw_money) <= balance){//??
            //... dann balance um withdraw_money vermindern
            balance -= withdraw_money;//??
            console.log(`Ihr aktueller Kontostand ist ${balance}.\nAuf wiedersehen!`);
        //Sonst-Falls withdraw_money grösser als balance ist ...
        } else if (parseInt(withdraw_money) > balance){//??
            //... dann die Meldung ausgeben: Sie überziehen Ihr Jugend-Konto, was nicht erlaubt.
            console.log(`Sie überziehen Ihr Jugend-Konto, was nicht erlaubt.\nAuf wiedersehen!`);
        }
    } else {//??
        //... die Meldung ausgeben: Keine Wahl getroffen. Sie sind abgemeldet!
        console.log(`Keine Funktion gewählt. Sie sind abgemeldet!`);//??
    }
}
//--End
