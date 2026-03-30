//recupérations des données
const soldeTotal = document.getElementById('total-balance');
const revenu = document.getElementById('total-income');
const depense = document.getElementById('total-expense');

//récupération des données du formaulaire

let inputDescription = document.getElementById('description');
let montant = document.getElementById('amount');
let category = document.getElementById('category');
const btnAjout = document.querySelector('.btn-primary');

//déclaration de variable 

let historique= JSON.parse(localStorage.getItem('historique'))||[];
let totalSolde =0;
let totalrevenu=0;
let totalDepense=0;

//début de la galère

btnAjout.addEventListener('click',()=>{
    const valeurMontant= parseFloat(montant.value);
    const cat = category.value;
    const desc = inputDescription.value;

    let nouvelleTransaction ={
        id : Date.now(),
        description: desc,
        montant: valeurMontant,
        categorie: cat,
        date: new Date().toLocaleDateString()
    };

    //gestion des depôts
    historique.push(nouvelleTransaction)
    if (cat == 'depot') {
        totalSolde+=valeurMontant
        totalrevenu+=valeurMontant
    }
    console.log(valeurMontant);
    console.log(nouvelleTransaction);
    console.log(historique);
    console.log(totalDepense);
    console.log(totalSolde);
    console.log(totalrevenu);
    if (cat == 'retrait' && totalSolde<valeurMontant) {
        alert('votre solde est insuffisant');
        return
    }
    else if(cat =='retrait' && totalSolde>valeurMontant){
        totalSolde -=valeurMontant;
        totalDepense+=valeurMontant;
        console.log(totalSolde,totalDepense);
        
    }
})