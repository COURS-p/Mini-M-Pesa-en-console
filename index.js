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
    console.warn("⚠️ monntant invalide !");
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

// retirer de l'argent

function retrait(montant) {
  // 1️⃣ Vérifier que le montant est valide
  if (montant <= 0 || isNaN(montant)) {
    console.log("⚠️ monntant invalide !");
    return;
  }

  // 2️⃣ Vérifier que le solde est suffisant

  if (montant > compte.solde) {
    console.warn(`❌ solde isuffisant pour effectuer ce retrait !`);
    console.log(`💰 Solde actuel : ${compte.solde}$`);
    return;
  }

  // 3️⃣ Retirer le montant
  compte.solde -= montant;

  // 4️⃣ Enregistrer la transaction dans l’historique
  compte.transactions.push({
    type: "retrait",
    montant: montant,
    date: new Date().toDateString(),
  });

  // 5️⃣ Afficher un message de confirmation
  console.log(`💸 Retrait effectué : -${montant}$`);
  console.log(`💰 Nouveau solde : ${compte.solde}$`);
}

afficherSoldeCompte(compte);
// afficherSoldeCompte(compte2);

depot(500);
depot(300);
depot(-200);
console.log("");
retrait(300);
retrait(2000);

for (let comptes of compte.transactions) {
  console.log(
    `Type: ${comptes.type}, Montant: ${comptes.montant}$, Date: ${comptes.date}`
  );
}

// console.log(compte.transactions);
