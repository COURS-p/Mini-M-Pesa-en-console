// Mini M-Pesa en console

console.log("=== Mini M-Pesa ====");

// compte

let compte = {
  nom: "Sabbat",
  numero: "0990312922",
  solde: 1000,
  transactions: [],
};

// Afficher le solde
function afficherSolde() {
  console.log(`💰 Solde actuel de ${compte.nom} : ${compte.solde}$ `);
}

afficherSolde();
