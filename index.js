// Mini M-Pesa en console

console.log("=== Mini M-Pesa ====");

// compte

let compte = {
  nom: "Sabbat",
  numero: "0990312922",
  solde: 1000,
  transactions: [],
};

let compte2 = {
  nom: "Alliance",
  numero: "0998765432",
  solde: 500,
  transactions: [],
};

// Afficher le solde
function afficherSoldeCompte(unCompte) {
  console.log(`💰 Solde actuel de ${unCompte.nom} : ${unCompte.solde}$ `);
}

afficherSoldeCompte(compte);
afficherSoldeCompte(compte2);
