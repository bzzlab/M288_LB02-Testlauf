/*
Aufgabe 1: Flow control
Programmieren Sie einen einfachen Bankomat, welcher auf die Eingaben des
Benutzers reagiert. Für die Umsetzung benötigen Sie die Kommentare als Hinweise,
ferner if-then-else und an bestimmten Stellen einen boolschen Operator (&& oder ||).
*/
//Modul importieren
let readline = require('readline-sync');
//Kontostand setzen
let balance = 1200;
//Willkommensmeldung
console.log(`Bancomat: Herzlich Willkommen:`)
//Fragen, was der Benutzer wählt (choice)
const choice = readline.question("Möchten Sie Geld abheben (1) oder einzahlen (2): ");
//Falls choice undefiniert oder die Länge von choice gleich Null ...
if (choice === undefined || choice.length === 0){
    //... dann Meldung: Keine Wahl getroffen. Sie sind abgemeldet!
    console.log(`Keine Wahl getroffen. Sie sind abgemeldet!`);
//... Sonst ...
} else {
    //Falls choice gleich 1 ...
    if (choice === "1") {
        //Fragen, wieviel der Benutzer abhebt (withdraw_money)
        const withdraw_money
            = readline.question(`Ihr aktueller Kontostand ist ${balance}.\nWieviel möchten Sie abheben?: `);
        if (withdraw_money === undefined){
            console.log(`Keine Wahl getroffen. Sie sind abgemeldet.`);
        } else if (parseInt(withdraw_money) < balance){
            balance -= withdraw_money;
            console.log(`Ihr aktueller Kontostand ist ${balance}.\nAuf wiedersehen!`);
        }
    } else if (choice === "2") {
        console.log(`Diese Funktion ist zur Zeit nicht realisiert. Sie sind abgemeldet!`);
    } else {
        console.log(`Keine Funktion gewählt. Sie sind abgemeldet!`);
    }
}

