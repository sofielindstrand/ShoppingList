
function nyttElement() //skapar en funktion för att nya ingridienser ska kunna tilläggas, i den här funktionen ligger flera andra funktioner för att det ska aktiveras samtidigt, alltså när men trycker på "lägg till"
{
    var item = document.getElementById("myInput").value; //hämtar elementen myInput som är fältet där vi skriver in nya varor i html
    var text = document.createTextNode(item); //säger här att ny text ska kunnas skapas 
    var newItem = document.createElement("li"); //säger att nytt item ska skapas i list-elementet i html
    newItem.appendChild(text); 
    document.getElementById("myUl").appendChild(newItem); 
    newItem.onclick = function() { //den här funktionen gör så att det går att stryka över de nya tillagda ingridienserna
    newItem.style.textDecoration ="line-through"; //stryker över ny ingridienser 
    //newItem.style.color="pink"; //ta bort den här kommentaren för att byta ut färgen
}
    var everyLi = document.querySelectorAll("li"); //en ny variabel som hämtar de redan tillagda ingridienserna inom li-taggarna
    for (var i = 0; i <everyLi.length; i++){ //i den här loopen finns det en funktion som gör så att även de redan tillagda ingridienserna kan strykas över med ett klick
    everyLi[i].onclick = function(){ //klickbar funktion på de gamla ingridienserna 
    this.style.textDecoration ="line-through"; //stryker över ny ingridienser 
    //this.style.color ="pink"; //ta bort den här kommentaren för att byta ut färgen
    }
    }
    for (var i = 0; i <everyLi.length; i++){ //i den här loopen finns en funktion som innebär att genom ett dubbelklick på ingridienserna kan dessutom ingridienserna plockas bort
            everyLi[i].ondblclick = function(){ //dubbelklcika för att få ingridienserna att försvinna 
            this.style.visibility ="hidden";
    }
    }
}