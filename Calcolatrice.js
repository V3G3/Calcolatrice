///////// dichiaro variabili gloabli //////////
const txt = document.getElementById("txt");
expression = [];
var isEqualActive = false;

///////// carico le funzioni da associare ai bottoni numeri e operatori //////////
function load(){
    const figures = document.querySelectorAll('.figures');
    figures.forEach(f => {
        f.addEventListener('click', (event) => {
            insertNumbers(event.target.value);
        });
    });

    const operators = document.querySelectorAll(".operators");
    operators.forEach(o => {
        o.addEventListener('click', (event) => {
            insertOperators(event.target.value);
        });
    });
}

///////// inserisco i numeri nella text //////////
function insertNumbers(num){
    if(txt.value == "+" || txt.value == "-" || txt.value == "*" || txt.value == "/") {
        txt.value = num; 
    }
    else {
        if(isEqualActive){
            txt.value = "";
            txt.value = num; 
            isEqualActive = false;
        }
        else txt.value += num;
    }
}

///////// inserisco gli operatori nella text togliendo i numeri e nel caso sostituendo l'operatore se presente nella text //////////
function insertOperators(ope){
    if(txt.value != ""){
        if(txt.value == "+" || txt.value == "-" || txt.value == "*" || txt.value == "/"){
            txt.value = ope;
            expression.pop();
            expression.push(ope);
        }
        else {
            expression.push(txt.value);
            txt.value = ope;
            expression.push(ope);
        }
    }
    else {
        alert("error");
    }
}

///////// funzione uguale fatta in due modi eval e no eval per vedere che vanno entrambe nella text ci sarà l'output dell'eval nel console log quello no eval //////////
function equal(){
    if (txt.value == "+" || txt.value == "-" || txt.value == "*" || txt.value == "/"){
        alert("error");
    }
    else {
    expression.push(txt.value);
    
    
    
    /////// eval ///////
    
    let all = "";
    let risultato = "";
    expression.forEach(e => {
        all += e;
    });
    risultato = eval(all);
    txt.value = risultato;

    ////////////////////


    /////// no eval ///////
    let totale = 0;
    for(let i = 0; i + 1 < expression.length; i+=2){
        if (i == 0){
            if(expression[i + 1] == "+"){
                totale = Number(expression[i]) + Number(expression[i + 2]);
            }
            else if(expression[i + 1] == "-"){
                totale = Number(expression[i]) - Number(expression[i + 2]);
            }
            else if(expression[i + 1] == "*"){
                totale = Number(expression[i]) * Number(expression[i + 2]);
            }
            else if(expression[i + 1] == "/"){
                totale = Number(expression[i]) / Number(expression[i + 2]);
            }
            else {
                alert("error");
            }
        }
        else {
            if(expression[i + 1] == "+"){
                totale += Number(expression[i + 2]);
            }
            else if(expression[i + 1] == "-"){
                totale -= Number(expression[i + 2]);
            }
            else if(expression[i + 1] == "*"){
                totale *= Number(expression[i + 2]);
            }
            else if(expression[i + 1] == "/"){
                totale /= Number(expression[i + 2]);
            }
            else {
                alert("error");
            }
        }
    }
    console.log(totale);
    ///////////////////////

    expression = [];
    isEqualActive = true;
    }
}

///////// pulisce text e array //////////
function cancel(){
    txt.value = "";
    expression = [];
}

///////// funzione se ti serve a vedere l'array richiamala quando hai bisogno nel codice //////////
function showLog(){
    console.log(expression);
}

///////// richiamo load //////////
load();