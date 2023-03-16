function TakeInput() {
    var change = document.getElementById("change").value;
    if(change >=0 && change <=99){
        ChangeCalc(change);    
    }
    else {
        alert("error, input must be a numerical between 0 and 99");
        document.getElementById("quarters").value = "";
        document.getElementById("dimes").value = "";
        document.getElementById("nickles").value = "";
        document.getElementById("pennies").value = "";
    }
}


const ChangeCalc = function (change) {
    var quarters = parseInt(change / 25);
    change = change % 25;

    var dimes = parseInt(change / 10);
    change = change % 10;

    var nickles = parseInt(change / 5);
    change = change % 5;

    var pennies = parseInt(change / 1);

    document.getElementById("quarters").value = quarters;
    document.getElementById("dimes").value = dimes;
    document.getElementById("nickles").value = nickles;
    document.getElementById("pennies").value = pennies;


    
}