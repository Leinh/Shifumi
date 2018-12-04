function game(choix) {
    var choix_ia = Math.floor(Math.random() * 3);

    if (choix == choix_ia) {
        result("égalité");
    }
    else {
        if (choix == 0) {
            (choix_ia == 1) ? result("défaite") : result("victoire");
        }
        if (choix == 1) {
            (choix_ia == 2) ? result("défaite") : result("victoire");
        }
        if (choix == 2) {
            (choix_ia == 0) ? result("défaite") : result("victoire");
        }
    }
}



function result(a) {

    if (a == "égalité") {
        document.getElementById("result").innerHTML = "EGALITE";
        document.getElementById("result").style = "display:block; color:gold; font-size:48px; border: 5px solid gold;"

    }
    else if (a == "victoire") {
        document.getElementById("result").innerHTML = "VICTOIRE";
        document.getElementById("result").style = " display:block;color:green; font-size:48px; border: 5px solid green;";
        viejoueur++;

    }

    else {
        document.getElementById("result").innerHTML = "DEFAITE";
        document.getElementById("result").style = "display:block; color:red; font-size:48px; border: 5px solid red;";
        vieia++;

    }
    setTimeout(
        function () {
            document.getElementById("result").style.display = "none"
        }, 2000);

    document.getElementById("viejoueur").innerHTML = viejoueur;
    document.getElementById("vieia").innerHTML = vieia;

    if (viejoueur == 5 || vieia == 5) {

        if (viejoueur == 5) {
            document.getElementById("result").innerHTML = "Bravo!";
        }
        else {
            document.getElementById("result").innerHTML = "Perdu!";
        }
        viejoueur = 0;
        vieia = 0;

        document.getElementById("viejoueur").innerHTML = viejoueur;
        document.getElementById("vieia").innerHTML = vieia;

        document.getElementById("main").innerHTML='<div id="rejouer" onclick="rejouer()"> Rejouer? </div> ';
    }


}

var viejoueur = 0;
var vieia = 0;

function rejouer(){
    location.reload();
    
}







