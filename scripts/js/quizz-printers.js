$.noConflict();
jQuery(document).ready(function($) {
    /* Ton code javascript ici */
    $(document).ready(function() {

            $("#results").click(function() {

                var forgetQuest = "";


                for (i = 1; i <= (5); i++) {
                    if (!$("input[@name=q" + i + "]:checked").val()) {
                        forgetQuest = forgetQuest + i + ", ";
                    } else {
                        $("input[@name=q" + i + "]").attr("disabled", "true");
                    }
                }
                if (forgetQuest.length !== 0) {
                    alert("Vérifiez que toutes les questions sont bien cochées !" + "\nVEUILLEZ VERIFIER LES QUESTIONS \nN°" + forgetQuest.substring(0, forgetQuest.length - 2) + ".");

                }


                //   #########   On check chaque question #########     
                else {
                    var cat1name = "1";
                    var cat2name = "2";
                    var cat3name = "3";
                    var cat4name = "4";
                    var cat5name = "5";
                    // var cat6name = "6";            
                    // var cat7name = "7";            
                    // var cat8name = "8";            
                    // var cat9name = "9";            
                    // var cat10name = "10";            
                    var cat11name = "None";
                    var cat22name = "None";

                    // Je declare la variable du compteur de points.

                    var compteurResultats = 0;
                    // Je declare la variable du compteur de points.        
                    var reponseFausse = "";
                    //   #########  Les bonnes réponses #########
                    //elles doivent obligatoirement correspondre aux reponses données au format texte dans la page HTML dans les balises Category"
                    //Si la question cochée est différente de :
                    var cat1 = ($("input[@name=q1]:checked").val() != "a");
                    var cat2 = ($("input[@name=q2]:checked").val() != "d");
                    var cat3 = ($("input[@name=q3]:checked").val() != "d");
                    var cat4 = ($("input[@name=q4]:checked").val() != "d");
                    var cat5 = ($("input[@name=q5]:checked").val() != "c");
                    // var cat6 = ($("input[@name=q6]:checked").val() != "c");
                    // var cat7 = ($("input[@name=q7]:checked").val() != "c");
                    // var cat8 = ($("input[@name=q8]:checked").val() != "b");
                    // var cat9 = ($("input[@name=q9]:checked").val() != "c");
                    // var cat10 = ($("input[@name=q10]:checked").val() != "b");
                    var cat11 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5);
                    var cat22 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5);
                    var categories = [];

                    if (cat1) { categories.push(cat1name); }
                    if (cat2) { categories.push(cat2name); }
                    if (cat3) { categories.push(cat3name); }
                    if (cat4) { categories.push(cat4name); }
                    if (cat5) { categories.push(cat5name); }
                    // if (cat6) { categories.push(cat6name); }            
                    // if (cat7) { categories.push(cat7name); }            
                    // if (cat8) { categories.push(cat8name); }            
                    // if (cat9) { categories.push(cat9name); }            
                    // if (cat10) { categories.push(cat10name); }           
                    if (cat11) { categories.push(cat11name); }
                    if (cat22) { categories.push(cat22name); }

                    var catStr = 'Vous avez correctement répondu: ' + categories.join(', ') + '';
                    $("#categorylist").text(catStr);
                    $("#categorylist").show("slow");

                    if (cat1) {
                        $("#category1").show("slow");
                        reponseFausse = reponseFausse + "1, ";
                    } else {
                        compteurResultats++;
                        $("#goodReponse1").show("slow");
                        $("#detailsReponse1").show("slow");
                    }

                    if (cat2) {
                        $("#category2").show("slow");
                        reponseFausse = reponseFausse + "2, ";
                    } else {
                        compteurResultats++;
                        $("#goodReponse2").show("slow");
                        $("#detailsReponse2").show("slow");
                    }

                    if (cat3) {
                        $("#category3").show("slow");
                        reponseFausse = reponseFausse + "3, ";
                    } else {
                        compteurResultats++;
                        $("#goodReponse3").show("slow");
                        $("#detailsReponse3").show("slow");
                    }

                    if (cat4) {
                        $("#category4").show("slow");
                        reponseFausse = reponseFausse + "4, ";
                    } else {
                        compteurResultats++;
                        $("#goodReponse4").show("slow");
                        $("#detailsReponse4").show("slow");
                    }

                    if (cat5) {
                        $("#category5").show("slow");
                        reponseFausse = reponseFausse + "5, ";
                    } else {
                        compteurResultats++;
                        $("#goodReponse5").show("slow");
                        $("#detailsReponse5").show("slow");
                    }

                    if (cat11) {
                        $("#category11").show("slow");
                        $('html,body').animate({ scrollTop: $("#bravo").offset().top }, 'slow');

                        alert("BRAVO !!! Vous avez répondu juste à toutes les questions. Votre score est de 5 sur 5.");
                        // alert("Vous pouvez être fier !");
                    }
                    // if (cat22) {
                    //     $("#category22").show("slow");
                    //     $('html,body').animate({scrollTop: $("#faux").offset().top}, 'slow');

                    //     alert("DOMMAGE !!! Vous n'étiez pas loin !");
                    // }
                    //        if (cat11) {
                    //            $("#category11").show("slow");
                    //        }
                    // if(reponseFausse.length!==0){
                    //     alert ("Votre score est de "+compteurResultats+ " points sur 10."+"\nRéponse(s) fausse(s) : \nN°"+reponseFausse.substring(0, reponseFausse.length-2)+".");                 


                    //     $('html,body').animate({scrollTop: $("#faux").offset().top}, 'slow');
                    //     $("#closing").show("slow");
                    // }  
                    if (compteurResultats.length != 0) {
                        alert("Votre score est de " + compteurResultats + " points sur 10." + "\nRéponse(s) fausse(s) : \nN°" + reponseFausse.substring(0, reponseFausse.length - 2) + ".");

                        $("#category22").show("slow");
                        $('html,body').animate({ scrollTop: $("#faux").offset().top }, 'slow');

                        alert("DOMMAGE !!! Vous n'étiez pas loin !");

                        // $('html,body').animate({scrollTop: $("#faux").offset().top}, 'slow');
                        $("#closing").show("slow");
                    }

                }

            });

            $("#refresh").click(function() {
                window.location.reload(true); //False = reload from cache True = reload from the server
            });

        }


    );
});

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
};

// FAQ

$(document).ready(function() {
    $('#faq-list p ').click(function() {
        $(this).next('.contenu').slideToggle("slow");
        $(this).next('.reponse').slideToggle("slow");
        $(this).toggleClass('close');
    });

    $('#administration p ').click(function() {
        $(this).next('.contenu').slideToggle("slow");
        $(this).next('.reponse').slideToggle("slow");
        $(this).toggleClass('close');

    });

    $('#version p ').click(function() {
        $(this).next('.contenu').slideToggle("slow");
        $(this).next('.reponse').slideToggle("slow");
        $(this).toggleClass('close');

    });
});