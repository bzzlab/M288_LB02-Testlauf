/*
Aufgabe: Grössen-Auswahl dynamisch erzeugen
Ergänzen Sie die mit ?? gekennzeichneten Lücken, um das Formular mit Radiobuttons und
Labels für die Grössenwahl abhängig vom Grössen-Array (sizeArray) zu erstellen.
Zusätzlich wird ein Submit-Button hinzugefügt, welcher die Funktion getSize aufruft.
Als Lösung geben Sie den Programmcode zwischen Begin und End ab.
*/
//--Begin
function generateSizeForm(formEl, sizeArray){
    //Element p erzeugen für die Meldung
    //??
    pEl.innerHTML="Grösse auswählen";
    //Loop über sizeArray, wobei pro Grösse einen Radiobutton und ein Label erstellen
    //??
        //Radiobutton erzeugen für size und im DOM hinzufügen
        //??
        radioBtn.setAttribute('type', 'radio');
        radioBtn.setAttribute('name', 'size');
        //??
        //??

        //Zugehöriger Label für Radiobutton erzeugen und im DOM hinzufügen
        let labelEl = document.createElement('label');
        labelEl.setAttribute('for', size);
        //??
        //??
        //Break erzeugen und im DOM hinzufügen
        let brEl = document.createElement('br');
        formEl.appendChild(brEl);


    //Abstand zu den Input-Elementen erzeugen und im DOM hinzufügen
    let divEl = document.createElement('div');
    divEl.setAttribute('style', "margin-bottom: 1rem");
    formEl.appendChild(divEl);
    //Input-Button mit Click-Event für Funktion getSize erzeugen und im DOM hinzufügen
    //??
    //??
    submitBtn.setAttribute('onclick', 'getSize("size")');
    submitBtn.setAttribute('value', "Grösse wählen");
    //??
}

function getSize(name) {
    //p-Element basket der gleichnamigen Variablen zu weisen
    //??
    //input-Elemente type radio Variablen sizeList zu weisen
    //??
    //Text für gewählt Grösse setzen
    let text = "Keine Grösse gewählt";
    //Loop mit forEach durch die sizeList
    //??
        //Falls size gewählt
        //??
            //... dann text: Grösse size.value gewählt.
            //??
    basket.innerHTML = text;
}
//--End
