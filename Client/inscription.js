$(document).ready(function(){
    var etat_civil = $("#etat_civil");
    var nom = $("#nom");
    var prenom = $("#prenom");
    var nom_complet = $("#nom_complet");

    function pseudo(){ 
        
        nom_complet.val(etat_civil.val()+" "+nom.val()+" "+ prenom.val());//val($("select option:selected").val()+" "+nom.val()+" "+prenom.val());
    };
    
    nom.keyup(pseudo);
    prenom.keyup(pseudo);
    etat_civil.change(pseudo);


     let mdp=$("#mot_de_passe");
     let mdp2=$("#confirmer_mot_de_passe");
     let affiche=$("#afficher_mot_de_passe");

     function afficherMDP(){
        if(affiche.prop("checked")){
            mdp.attr('type','text');
            mdp2.attr('type','text');
        }else{
            mdp.attr('type','password');
            mdp2.attr('type','password');  
        }
    };

    affiche.change(afficherMDP);

    let envoyer = $("#envoyer");
    let info = $("input");
    
    function valideForm(){
        let valid=true;
        
        info.each(function() {
            if($(this).val()===""){
                $(this).css("borderColor", "red");
                valid=false;
            } else {
                $(this).css("borderColor", "");
            }
        });
        return valid;
    }

    info.on("input",function(){
        envoyer.prop("disabled",!valideForm());
    }); 

    // Fonction i
    function ValideMdp(){
        if(mdp.val() !== mdp2.val()){
            mdp2.css("borderColor","red");
            envoyer.prop("disabled",true);
        } else {
            mdp2.css("borderColor","");
            envoyer.prop("disabled",false);
        }
    }

    mdp.on("input",ValideMdp);
    mdp2.on("input",ValideMdp);
    envoyer.on("submit",function(e){
        if(!valideForm() || !ValideMdp()){
            e.preventDefault();
        }
    });

    function submitForm(e) {
        e.preventDefault();

        let civilite = $("#etat_civil").val();
        let nom = $("#nom").val();
        let prenom = $("#prenom").val();
        let date_naissance = $("#date_de_naissance").val();

        let message = "Bonjour " + civilite + " " + nom + " " + prenom + ", vous êtes né le " + date_naissance;
        $("form").hide();

        let confirmation = $("<p>").text(message);
        $("body").append(confirmation);
    }

    envoyer.on("click",function(e){
        e.preventDefault();
        submitForm(e);
    })

});
   