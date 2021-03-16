let choix = prompt("Quelle opération voulez-vous effectuer :\n1: Addition\n2:Soustraction\n3:Multiplication\n4:Division");
choix = parseInt(choix);

// while (choix != 1 || choix != 2 || choix != 3 || choix != 4 ){
while (choix != 1 ){
    choix = prompt("Pas bon choix, entrer un autre");
    choix = parseInt(choix);
     };

let premierNombre = prompt ("Entrez le premier nombre");
premierNombre = parseFloat (premierNombre);

while (isNaN(premierNombre) ){
    premierNombre = prompt("Ce que vous avez entré n'était pas un nombre, entrez votre premier nombre:");
     };


let deuxiemeNombre = prompt ("Entrez le deuxieme nombre");
deuxiemeNombre = parseFloat (deuxiemeNombre);

while (isNaN(deuxiemeNombre) ){
    deuxiemeNombre = prompt("Ce que vous avez entré n'était pas un nombre, entrez votre premier nombre:");
    };

    
function addition(premierNombre,deuxiemeNombre){
    return resultat = premierNombre + deuxiemeNombre;
}

resultat2 = premierNombre + deuxiemeNombre
// function soustraction(premierNombre,deuxiemeNombre){
//     return premierNombre - deuxiemeNombre;
// }

// function multiplication(premierNombre,deuxiemeNombre){
//     return premierNombre * deuxiemeNombre;
// }

// function division(premierNombre,deuxiemeNombre){
//     return premierNombre / deuxiemeNombre;
// }



switch(choix){
    case 1: addition();
            type1 = typeof(premierNombre);
            type2 = typeof(deuxiemeNombre);
            type3 = typeof(resultat);
            type4 = parseFloat(resultat);
        alert(`resultat: ${premierNombre} + ${deuxiemeNombre} = ${resultat} ${addition()} ${type1} ${type2} ${type3} ${type4}\n
                         ${premierNombre} + ${deuxiemeNombre} = ${premierNombre + deuxiemeNombre}\n
                         ${premierNombre} + ${deuxiemeNombre} = ${resultat2}`);
            break;
    case 2: resultat = soustraction();
        alert(`resultat: ${premierNombre} - ${deuxiemeNombre} = ${resultat}`);
            break;
    case 3: resultat = multiplication();
        alert(`resultat: ${premierNombre} x ${deuxiemeNombre} = ${resultat}`);
            break;
    case 4: resultat = division();
        alert(`resultat: ${premierNombre} / ${deuxiemeNombre} = ${resultat}`);
            break;
    default: alert("pas de bon choix");
        };

// switch(choix){
//     case 1: resultat = premierNombre + deuxiemeNombre;
//             let container = document.getElementById("container");
//             container.innerHTML = `<p>resultat: ${premierNombre} + ${deuxiemeNombre} = ${resultat}</p>`;
//                 break;
//     case 2: resultat = premierNombre - deuxiemeNombre;
//             let container = document.getElementById("container");
//             container.innerHTML = `<p>resultat: ${premierNombre} - ${deuxiemeNombre} = ${resultat}</p>`;
//                 break;
//     case 3: resultat = premierNombre * deuxiemeNombre;
//             // let container = document.getElementById("container");
//             // container.innerHTML = `<p>resultat: ${premierNombre} x ${deuxiemeNombre} = ${resultat}</p>`;
//                 break;
//     case 4: resultat = premierNombre / deuxiemeNombre;
//             // let container = document.getElementById("container");
//             // container.innerHTML = `<p>resultat: ${premierNombre} / ${deuxiemeNombre} = ${resultat}</p>`;
//                 break;
//     default: alert("pas de chiffres");
// }


// let container = document.getElementById("container");
    // container.innerHTML = `<p>resultat: ${premierNombre} + ${deuxiemeNombre} = ${resultat}</p>`;



// if (choix == 1){
//     let container = document.getElementById("container");
//     container.innerHTML = `<p>resultat: ${premierNombre} + ${deuxiemeNombre} = ${premierNombre + deuxiemeNombre}</p>`;
//     }
// else if (choix == 2){
//     let container = document.getElementById("container");
//     container.innerHTML = `<p>resultat: ${premierNombre} - ${deuxiemeNombre} = ${premierNombre - deuxiemeNombre}</p>`;
//     }
// else if (choix == 3){
//         let container = document.getElementById("container");
//         container.innerHTML = `<p>resultat: ${premierNombre} x ${deuxiemeNombre} = ${premierNombre * deuxiemeNombre}</p>`;
//     }
// else if (choix == 3){
//         let container = document.getElementById("container");
//         container.innerHTML = `<p>resultat: ${premierNombre} / ${deuxiemeNombre} = ${premierNombre / deuxiemeNombre}</p>`;
//     }


