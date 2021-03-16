
// var choix = Number(prompt('Quelle opération désirez-vous effectuer?\n\n1.Additionner\n2.Soustraire\n3.Multiplier\n4.Diviser\n\nQuel est votre choix ?'));
do {
    //J'utilise une variable pour avoir un scope global
    var choix = Number(prompt('Quelle opération désirez-vous effectuer?\n\n1.Additionner\n2.Soustraire\n3.Multiplier\n4.Diviser\n\nQuel est votre choix ?'));
} while (choix != 1 && choix != 2 && choix != 3 && choix !=4 );


// var premierNombre = Number(prompt('Quel est votre premier nombre ?'));
do {
    var premierNombre = Number(prompt("Pouvez-vous donner votre premier nombre ?"));
} while (isNaN(premierNombre));


// var deuxiemeNombre = Number(prompt('Quel est votre deuxieme nombre ?'));
do {
    var deuxiemeNombre = Number(prompt("Pouvez-vous donner votre deuxieme nombre ?"));
} while (isNaN(premierNombre));

// let deuxiemeNombre = prompt ("Entrez le deuxieme nombre");
// deuxiemeNombre = parseFloat (deuxiemeNombre);

// while (isNaN(deuxiemeNombre) ){
//     deuxiemeNombre = prompt("Ce que vous avez entré n'était pas un nombre, entrez votre premier nombre:");
//     };

    
function addition(nb1,nb2){
    return nb1 + nb2;
}

function soustraction(nb1,nb2){
    return nb1 - nb2;
}

function multiplication(nb1,nb2){
    return nb1 * nb2;
}

function division(nb1,nb2){
    if(nb2 == 0){
        alert(`Il est impossible de diviser par 0`);
        }
    else {return nb1 / nb2}
}

switch(choix){
    case 1: resultat = addition(premierNombre,deuxiemeNombre);
            operateur = "+";
            break;
    case 2: resultat = soustraction(premierNombre,deuxiemeNombre);
            operateur = "-";
            break;
    case 3: resultat = multiplication(premierNombre,deuxiemeNombre);
            operateur = "x";
            break;
    case 4: resultat = division(premierNombre,deuxiemeNombre);
            operateur = "/";
            break;
    default : alert(`Une erreur est survenue`);
             };


alert(`le resultat de l'opération ${premierNombre} ${operateur} ${deuxiemeNombre} est ${resultat}`)






