// rules
let lettersBox = document.getElementById("letters-box")
let bigLettersBox = document.getElementById("big-letters-box")
let numbersBox = document.getElementById("numbers-box")
let symbolBox = document.getElementById("symbols-box")
let passLength = document.getElementById("many")
// password outpot
let outPut = document.getElementById("out-pass")

/// passowrd elements
const lettersAll = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const bigLettersAll = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numbersAll = ["1","2","3","4","5","6","7","8","9","0"]
const symbolAll = ["$","#","&","@","!","-","+","=","?",":","*"]

// password outpot text
let thePassowrd = []

//// the push function
function pushToIt() {
    /// none selected
    if (thePassowrd.length != passLength.value && lettersBox.checked == false && bigLettersBox.checked == false && numbersBox.checked == false && symbolBox.checked == false) { 
        outPut.innerHTML = `you must select at least 1 check box`
    }
    // if only letters selected
     else if (thePassowrd.length != passLength.value && lettersBox.checked && bigLettersBox.checked == false && numbersBox.checked == false && symbolBox.checked == false) {
        const passwordsAll = [getRandom(lettersAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }
    // if only big letters selected
    else if (thePassowrd.length != passLength.value && lettersBox.checked == false && bigLettersBox.checked && numbersBox.checked == false && symbolBox.checked == false) {
        const passwordsAll = [getRandom(bigLettersAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only numbers selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked == false && bigLettersBox.checked == false && numbersBox.checked && symbolBox.checked == false) {
        const passwordsAll = [getRandom(numbersAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only symbol selected
    else if (thePassowrd.length != passLength.value && lettersBox.checked == false && bigLettersBox.checked == false && numbersBox.checked == false &&  symbolBox.checked) {
        const passwordsAll = [getRandom(symbolAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only letters &&&&&&& big letters selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked && bigLettersBox.checked && numbersBox.checked == false && symbolBox.checked == false) {
        const passwordsAll = [getRandom(lettersAll),getRandom(bigLettersAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }
    // if only letters &&&&&&& numbers selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked &&  bigLettersBox.checked == false &&  numbersBox.checked && symbolBox.checked == false) {
        const passwordsAll = [getRandom(lettersAll),getRandom(numbersAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only letters &&&&&&& symbol selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked && bigLettersBox.checked == false  && numbersBox.checked == false &&  symbolBox.checked) {
        const passwordsAll = [getRandom(lettersAll),getRandom(symbolAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only big letters &&&&&&& numbers selected
    else if (thePassowrd.length != passLength.value && lettersBox.checked == false && bigLettersBox.checked&& numbersBox.checked && symbolBox.checked == false) {
        const passwordsAll = [getRandom(bigLettersAll),getRandom(numbersAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only big letters &&&&&&& symbols selected
    else if (thePassowrd.length != passLength.value && lettersBox.checked == false && bigLettersBox.checked && numbersBox.checked == false &&  symbolBox.checked) {
        const passwordsAll = [getRandom(bigLettersAll),getRandom(symbolAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only numbers &&&&&&& symbols selected
    else if (thePassowrd.length != passLength.value && lettersBox.checked == false && bigLettersBox.checked == false  && numbersBox.checked &&  symbolBox.checked) {
        const passwordsAll = [getRandom(numbersAll),getRandom(symbolAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only letters &&&&&&& big letters &&&&&& numbers selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked && bigLettersBox.checked && numbersBox.checked && symbolBox.checked == false) {
        const passwordsAll = [getRandom(lettersAll),getRandom(bigLettersAll),getRandom(numbersAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    // if only letters &&&&&&& big letters &&&&&& symbol selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked && bigLettersBox.checked && numbersBox.checked == false &&  symbolBox.checked) {
        const passwordsAll = [getRandom(lettersAll),getRandom(bigLettersAll),getRandom(symbolAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }
    
    // if only letters &&&&&&& numbers &&&&&& symbol selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked && bigLettersBox.checked == false && numbersBox.checked&&  symbolBox.checked) {
        const passwordsAll = [getRandom(lettersAll),getRandom(numbersAll),getRandom(symbolAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }
    
    // if only numbers &&&&&&& big letters &&&&&& symbol selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked == false && bigLettersBox.checked && numbersBox.checked &&  symbolBox.checked) {
        const passwordsAll = [getRandom(lettersAll),getRandom(bigLettersAll),getRandom(symbolAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }
    
    // if only all selected
    else if (thePassowrd.length != passLength.value &&  lettersBox.checked && bigLettersBox.checked && numbersBox.checked &&  symbolBox.checked) {
        const passwordsAll = [getRandom(lettersAll),getRandom(bigLettersAll),getRandom(numbersAll),getRandom(symbolAll)]
        thePassowrd.push(getRandom(passwordsAll))
        pushToIt()
    }

    else if (thePassowrd.length == passLength.value) {
       thePassowrd.forEach(elements => outPut.innerHTML += elements);
    }
}


/// the show function (when clicked get random button)
function showRandom() {
   thePassowrd = []
   outPut.innerHTML = ``
   pushToIt()
}


// the random function 
function getRandom(item) {
    return item[Math.floor(Math.random() * item.length)]
}