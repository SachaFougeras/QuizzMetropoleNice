$(document).ready(function() {

    //$("#afficherResultats").click(function() {
    //    $(".total").show("slow");
    //});
    $("#afficherResultats").click(function() {
        $(".total").show("slow");
    });

    $("#cacherResultats").click(function() {
        $(".total").hide("slow");
    });


    $("#impression").click(function() {
        window.print();
        return false;

    });




});




function compter(numeroEquipe) {
    var total = 0;

    total = total + parseInt($("#E" + numeroEquipe + "Q1").val());
    total = total + parseInt($("#E" + numeroEquipe + "Q2").val());
    total = total + parseInt($("#E" + numeroEquipe + "Q3").val());
    total = total + parseInt($("#E" + numeroEquipe + "Q4").val());
    total = total + parseInt($("#E" + numeroEquipe + "Q5").val());
    total = total + parseInt($("#E" + numeroEquipe + "Q6").val());

    //    total=total+parseInt($("#E" + numeroEquipe + "Q7").val());
    //    total=total+parseInt($("#E" + numeroEquipe + "Q8").val());
    //    total=total+parseInt($("#E" + numeroEquipe + "Q9").val());
    //    total=total+parseInt($("#E" + numeroEquipe + "Q10").val());
    //    total=total+parseInt($("#E" + numeroEquipe + "Q11").val());
    //    total=total+parseInt($("#E" + numeroEquipe + "Q12").val());

    $("#totE" + numeroEquipe).val(total);

}

function ouvrirTableau() {
    var tableau = window.open("resultats.html");
};

function date_heure(id) {
    date = new Date;
    annee = date.getFullYear();
    moi = date.getMonth();
    mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
    j = date.getDate();
    jour = date.getDay();
    jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    //s = date.getSeconds();
    //if(s<10)
    //{
    //        s = "0"+s;
    //}
    resultat = 'Session : ' + jours[jour] + ' ' + j + ' ' + mois[moi] + ' ' + annee;
    document.getElementById(id).innerHTML = resultat;
    setTimeout('date_heure("' + id + '");', '1000');
    return true;
}