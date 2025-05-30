let operazione = "";    // tiene conto della operazione
let valore1 = "";       // primo
let valore2 = "";       // secondo
let risultato = 0;      // risultato
let waitingForSecondValue = false;  // flag per vedere se ha usato operazione

function aggiungi(valore) {
  const display = document.getElementById('display');
  if (waitingForSecondValue) {

    if (display.value !== "") {
      calcola();
    }
    waitingForSecondValue = false;
    display.value = ""; 
  }

  display.value += valore;
}

function setOperazione(op) {
  if (operazione && !waitingForSecondValue) {
    calcola();
  }

  operazione = op;
  valore1 = document.getElementById('display').value;
  waitingForSecondValue = true;
  document.getElementById('display').value = "";
}

function canc() {
  document.getElementById('display').value = "";
  operazione = "";
  valore1 = "";
  valore2 = "";
  risultato = 0;
  waitingForSecondValue = false;
}

function last() {
  let stringa = document.getElementById('display').value;
  document.getElementById('display').value = stringa.substring(0, stringa.length - 1);
}

function calcola() {
  valore2 = document.getElementById('display').value;

  let num1 = parseFloat(valore1);
  let num2 = parseFloat(valore2);

  if (isNaN(num1) || isNaN(num2)) {
    risultato = "Errore";
  } else {
    switch (operazione) {
      case '+':
        risultato = num1 + num2;
        break;
      case '-':
        risultato = num1 - num2;
        break;
      case '*':
        risultato = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          risultato = "Errore";
        } else {
          risultato = num1 / num2;
        }
        break;
      default:
        risultato = num2;
    }  
  }

  if (typeof risultato === "number") {
    if (risultato % 1 !== 0)
      document.getElementById('display').value = risultato.toFixed(3).toString().replace('.', ',');
    else
      document.getElementById('display').value = risultato.toString().replace('.', ',');
  } else {
    document.getElementById('display').value = risultato;  // show error string as is
  }
  valore1 = risultato.toString();
  operazione = "";
  valore2 = "";
  waitingForSecondValue = false;
  risultato = 0;
}


function root() {
  try {
    valore1 = document.getElementById('display').value;
    risultato = Math.sqrt(parseFloat(valore1));
    document.getElementById('display').value = risultato.toFixed(3).replace('.', ',');
  } catch (error) {
    console.error("Error calculating the root:", error);
  }
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
  document.body.classList.add('desktop-zoom');
}
