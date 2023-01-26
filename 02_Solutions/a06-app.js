/*
Aufgabe: Grössen-Auswahl dynamisch erzeugen
Ergänzen Sie die mit ?? gekennzeichneten Lücken, um das Formular mit Radiobuttons und
Labels für die Grössenwahl abhängig vom Grössen-Array (sizeArray) zu erstellen.
Zusätzlich wird ein Submit-Button hinzugefügt, welcher die Funktion getSize aufruft.
Als Lösung geben Sie den Programmcode zwischen Begin und End ab.
*/
//--Begin
function generateSizeForm(formEl, sizeArray){
    //Loop über sizeArray, wobei pro Grösse einen Radiobutton und ein Label erstellen
    sizeArray.forEach(size => {//??
        //Radiobutton erzeugen für size und im DOM hinzufügen
        let radioBtn = document.createElement('input');//??
        radioBtn.setAttribute('type', 'radio');
        radioBtn.setAttribute('name', 'size');
        radioBtn.setAttribute('value', size);//??
        formEl.appendChild(radioBtn);//??

        //Zugehöriger Label für Radiobutton erzeugen und im DOM hinzufügen
        let labelEl = document.createElement('label');
        labelEl.setAttribute('for', size);
        labelEl.innerHTML=`Grösse ${size}`;//??
        formEl.appendChild(labelEl);//??
        //Break erzeugen und im DOM hinzufügen
        let brEl = document.createElement('br');
        formEl.appendChild(brEl);
    });
    //Abstand zu den Input-Elementen erzeugen und im DOM hinzufügen
    let divEl = document.createElement('div');
    divEl.setAttribute('style', "margin-bottom: 1rem");
    formEl.appendChild(divEl);
    //Input-Button mit Click-Event für Funktion getSize erzeugen und im DOM hinzufügen
    let submitBtn = document.createElement('input');//??
    submitBtn.setAttribute('type', 'button');//??
    submitBtn.setAttribute('onclick', 'getSize("size")');
    submitBtn.setAttribute('value', "Grösse wählen");
    formEl.appendChild(submitBtn);//??
}

function getSize(name) {
    //p-Element basket der gleichnamigen Variablen zu weisen
    let basket = document.getElementById("basket");//??
    //input-Elemente type radio Variablen sizeList zu weisen
    let sizeList = document.getElementsByName(name);//??
    //Text für gewählt Grösse setzen
    let text = "Keine Grösse gewählt";
    //Loop mit forEach durch die sizeList
    sizeList.forEach(size => {//??
        //Falls size gewählt
        if (size.checked){//??
            //... dann text: Grösse size.value gewählt.
            text = `Grösse ${size.value} gewählt.`//??
        }
    })
    basket.innerHTML = text;
}
//--End
