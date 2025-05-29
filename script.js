    let operazione = "";
    let valore1 = "";
    let valore2 = "";
    
    let count0 = 0;
    let count1 = 0;

    var risultato = 0;

    function aggiungi(valore) {
      document.getElementById('display').value += valore;
    }

    function setOperazione(op) {
      operazione = op;
      valore1 = document.getElementById('display').value;
      document.getElementById('display').value = "";
    }

    function canc() {
      document.getElementById('display').value = "";
      operazione = "";
      valore1 = "";
      valore2 = "";
      count0 = 0;
      count1 = 0;
      risultato = 0;
    }

    function last() {
        let stringa = document.getElementById('display').value;
        document.getElementById('display').value = stringa.substring(0, stringa.length - 1);
    }

    function parentesi(){
      if(count0 === count1){
        document.getElementById('display').value += '(';
        count0++;
      }
      else{
        document.getElementById('display').value += ')';
        count1++;
      }
    }

  function calcola() {
    valore2 = document.getElementById('display').value;

    let num1 = parseFloat(valore1);
    let num2 = parseFloat(valore2);

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
          risultato = "Errore (div 0)";
        } else {
          risultato = num1 / num2;
        }
        break;
      default:
        risultato = "Errore";
    }

    document.getElementById('display').value = risultato;
    valore1 = risultato.toString();
    operazione = "";
    valore2 = "";
    count0 = 0;
    count1 = 0;
}
