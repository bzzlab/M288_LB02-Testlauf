/*
Aufgabe: Ein Argument auslesen
Ergänzen Sie die mit ?? gekennzeichneten Lücken, um das Argument für den Kontostand (balance)
einzulesen und auszugeben. Halten Sie sich für die Umsetzung an die Kommentare.
Als Lösung geben Sie den Programmcode zwischen Begin und End ab.

Mögliche Szenarien:
$ node a01.js
Kein Kontostand vorhanden. Sie sind abgemeldet!

$ node a01.js 1200
Bancomat - Herzlich Willkommen!
Ihr Kontostand ist CHF 1200.
*/

//--Begin
//Argumente auslesen
let args = process.argv.slice(2);
//Kontostand setzen. Variable balance verwenden.
let balance = args[0];//??

//Falls balance undefiniert oder die Länge von balance gleich Null ist ...
if (balance === undefined || balance.length === 0){ //??
    // ... dann die Meldung ausgeben: Kein Kontostand vorhanden. Sie sind abgemeldet!
    console.log(`Kein Kontostand vorhanden. Sie sind abgemeldet!`);//??
//Sonst ...
} else {//??
    //... die Meldung ausgeben: Bancomat - Herzlich Willkommen! Ihr Kontostand ist ${balance}
    console.log(`Bancomat - Herzlich Willkommen!\nIhr Kontostand ist CHF ${balance}.`);//??
}
//--End
