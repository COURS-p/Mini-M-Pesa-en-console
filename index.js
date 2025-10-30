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

// depot d'argent

function depot(montant) {
  // 1️⃣ Vérifier que le montant est valide
  if (montant <= 0 || isNaN(montant)) {
    console.log("⚠️ monntant invalide !");
    return;
  }
  // 2️⃣ Ajouter le montant au solde du compte
  compte.solde += montant;

  // 3️⃣ Enregistrer la transaction dans l’historique
  compte.transactions.push({
    type: "depot",
    montant: montant,
    date: new Date().toDateString(),
  });

  // 4️⃣ Confirmer à l’utilisateur
  console.log(`✅ Dépôt effectué avec succès ! : +${montant}$`);
  console.log(`💰 Nouveau solde : ${compte.solde}$`);
}

afficherSoldeCompte(compte);
// afficherSoldeCompte(compte2);

depot(500);
depot(300);
depot(-200);

for (let comptes of compte.transactions) {
  console.log(
    `Type: ${comptes.type}, Montant: ${comptes.montant}$, Date: ${comptes.date}`
  );
}

// console.log(compte.transactions);
