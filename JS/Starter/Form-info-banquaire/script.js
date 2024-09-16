'use strict';
let form;
let input;
let inputlist;


window.onload = function (){
    input = document.querySelectorAll('div > input')
        
    for(let i=0; i<input.length; i++) {
        input[i].addEventListener('input', () => {
            if (input[i].value.length == 4 && i>=0 && ( i<4 ||  i==5)){
                input[i+1].focus();
            } else if ( input[i].value.length == 2 &&  i==4 ){
                input[i+1].focus();
            }
        })
    }  
}

// On appelle la fonction à la soumission du formulaire
function showData(event) {
    // On évite le comportement par défaut du formulaire 
    event.preventDefault();

    // On initialise nos variables au début de la fonction, pour garantir la réinitialisation des valeurs
    let codeBanquaire ="";
    let dateExpiration ="";
    let codeSecret ="";

    /*On utilise queryselectorAll qui nous retourne une liste contenant toutes les balises 
    correspondant au selecteur css, ici toutes les 'div' étant enfant direct du 'form'*/
    form = document.querySelectorAll('form > div');

    //On va utiliser une double boucle
    // La première boucle sur chacune de ces 'div' contenant les divers groupes d'inputs

    for(let i=0; i<form.length-1; i++) {
        /* A chaque itération, on renouvelle une variable qui correspond à la liste d'inputs contenu dans chacune de ces div
        Ainsi, on obtient une liste de longeur variable, correspondant aux différents blocs d'inputs, sur lesquelles on va 
        pouvoir à nouveau boucler pour chercher la valeur de chacun de ces inputs*/
        /*  Boucle i = 0 : on a le premier bloc de div avec les 4 inputs pour le code bancaire
            Boucle i = 1 : on a le deuxieme bloc de div avec les 2 inputs pour la date d'expiration
            Boucle i = 2 : on a le premier bloc de div avec les 4 inputs pour le code secret
        */        
        inputlist = document.querySelectorAll(`form div:nth-child(${i+1}) input`);

        //On boucle donc sur la liste d'inputs
        for( let j=0; j<inputlist.length; j++) {

            /* On crée un 'switch case' pour gérer les 3 cas qui vont nous intéresser :
            ici les cas 0 1 et 2 vu qu'on boucle sur form avec i
            Ainsi, à chaque fois qu'on va boucler sur nos inputs, on va vérifier dans quelle itération de la boucle parente on se trouve
            afin de savoir si on doit ajouter la valeur au codeBanquaire, à la dateExpiration ou bien au codeSecret
            */
            switch(i) {
                case 0:
                    //Ici des conditions ternaires... petit flex dsl ...
                    // Pour résumer, ça revient à écrire if(codeBanquaire=="") { codeBanquaire += inputlist[j].value } else { codeBanquaire += " "+inputlist[j].value }
                    // Alors, pourquoi ?
                    // Simple mise en forme : ici on veut que la string ressemble à : XXXX XXXX XXXX XXXX
                    // On dit donc que si la string de base est vide, on ajoute juste la valeur, sinon on ajoute un petit espace avant
                    // inputlist[j] est donc notre élément input issue de la liste inputlist, on extrait juste sa valeur à chaque fois
                    // pour la concaténer notre variable, afin d'obtenir le code à la fin
                    codeBanquaire == "" ? codeBanquaire += inputlist[j].value : codeBanquaire += " "+inputlist[j].value
                    break;
                case 1:
                    // Cas assez similaire ici
                    // si la string n'est pas vide, on ajoute un / pour pouvoir afficher une date propre sous format XX / XX
                    /* ici c'est bien toujours inputlist[j] qu'on va chercher :
                        en effet, à chaque itération sur 'form', on a inputlist qui devient le bloc d'input suivant, 
                        donc on a qu'à récupérer dans la nouvelle boucle sur inputlist les nouvelles valeurs des inputs de la liste,
                        étant donné que ce sont les prochains
                    */ 
                    dateExpiration == "" ? dateExpiration += inputlist[j].value : dateExpiration += " / "+inputlist[j].value
                    break;
                case 2:
                    // Ici pas besoin de mise en forme car il n'y a qu'une seule itération
                    // la logique reste la même
                    codeSecret += inputlist[j].value
            }
        }
    }
    /*
    console.log({
        codeBanquaire,
        dateExpiration,
        codeSecret
    });*/
    // On retourne le résultat sous forme d'un objet contenant les clés/variables ainsi que les valeurs de ces variables
    // J'ai laissé la console pour vérifier en haut
    return {
        codeBanquaire,
        dateExpiration,
        codeSecret
    }
}