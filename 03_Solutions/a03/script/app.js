/*
    Aufgabenstellung -
    1. Legen Sie das JavaScript als externe Datei an und importieren es in die index.html
    2. Programmieren Sie Devisen-Umrechnung der lokalen Währung (z.B. CHF) zur Zielwährung (z.B. EUR)
    3. Fügen Sie noch eine weitere Zielwährung hinzu (z.B. USD)
    4. Programmieren Sie Devisen-Umrechnung der Zielwährung (z.B. EUR oder USD) in die lokale Währung (z.B. CHF)
*/

const EUR = "eur";
const CHF = "chf";
const USD = "usd";

// aus https://www1.oanda.com/currency/converter/
let CHF_EUR = 0.92901;
let CHF_USD = 1.07378;

let EUR_CHF = 1.07619;
let USD_CHF = 0.93109;

//Werte auslesen
let locAm = document.getElementById("localAmount");
let locEx = document.getElementById("localExchange");
let forAm = document.getElementById("foreignAmount");
let forEx = document.getElementById("foreignExchange");

/* Multipliziert den Betrag mit dem Umwandlungskurs resp. Währungskurs */
function convert(betrag, kurs) {
    return Math.fround(betrag * kurs).toFixed(4);
}

/**
 *  von CHF nach Fremdwährung
 */
function localToForeign() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === CHF) {
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === EUR) {
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
            forAm.value = convert(locAm.value, CHF_EUR);
        }
        if (forEx.value === USD) {
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            forAm.value = convert(locAm.value, CHF_USD);
        }
    }
}

/**
 *  von Fremdwährung nach CHF
 */
function foreignToLocal() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === CHF) {
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === EUR) {
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
            locAm.value = convert(forAm.value, EUR_CHF);
        }
        if (forEx.value === USD) {
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            locAm.value = convert(forAm.value, USD_CHF);
        }
    }
}

