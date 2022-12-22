/*
Aufgabe: Saldoverlauf ausgeben
Ergänzen Sie die mit ?? gekennzeichneten Lücken, um den Saldoverlauf anhand von
Argumenten zu simulieren. Halten Sie sich für die Umsetzung an die Kommentare.
Als Lösung geben Sie den Programmcode zwischen Begin und End ab.

Tipp: Die Funktion parseInt konvertiert einen String in eine Zahl um.

Mögliche Szenarien:
$ node a02.js

$ node a02.js 800 -500
Saldoverlauf +800
Saldoverlauf +300

$ node a02.js 1200 -300 -1400 200 -120 -400 5000
Saldoverlauf +1200
Saldoverlauf +900
Konto wurde um -500 überzogen.
Konto wurde um -300 überzogen.
Konto wurde um -420 überzogen.
Konto wurde um -820 überzogen.
Saldoverlauf +4180

*/
//--Begin
//Argumente auslesen
let args = process.argv.slice(2);
//Kontostand setzen. Variable balance verwenden.
let saldo = 0;
//Loop durch alle args
//??
    //saldo um betrag erhöhen
    saldo += parseInt(betrag);
    //Falls saldo kleiner 0
    //??
        // ... dann die Meldung ausgeben: Konto wurde um saldo überzogen.
        //??
    //Sonst-Falls saldo grösser gleich 0
    //??
        // ... dann die Meldung ausgeben: Saldoverlauf +saldo.
        //??
//--End
