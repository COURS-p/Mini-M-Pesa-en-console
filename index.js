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
    date: new Date().toLocaleString(),
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
    date: new Date().toLocaleString(),
  });

  // 5️⃣ Afficher un message de confirmation
  console.log(`💸 Retrait effectué : -${montant}$`);
  console.log(`💰 Nouveau solde : ${compte.solde}$`);
}

// historique des transactions

function historique() {
  console.log("");
  console.log("--- 📜 Historique des transactions : ---");

  // 1️⃣ Vérifier s'il y a des transactions
  if (compte.transactions.length === 0) {
    console.log(`Aucune transaction pour le moment !`);
    return;
  }

  // 2️⃣ Parcourir le tableau des transactions

  for (let i = 0; i < compte.transactions.length; i++) {
    let t = compte.transactions[i];
    // console.log(`${i + 1} - [${t.date}] ${t.type} ${t.montant}$`);
    console.log(
      `${i + 1}. ${t.type.padEnd(5)} | ${t.montant.toString().padStart(5)}$ | ${
        t.date
      }`
    );
  }

  // ou avec for...of
  // for (let comptes of compte.transactions) {
  //   console.log(
  //     `${compte.transactions.indexOf(comptes) + 1}. Type: ${
  //       comptes.type
  //     }, Montant: ${comptes.montant}$, Date: ${comptes.date}`
  //   );
  // }

  // 3️⃣ Afficher le solde final
  console.log(`💰 Solde actuel : ${compte.solde}$`);
}

// transfert d'argent entre deux comptes

function transfert(destinataire, montant) {
  // 1️⃣ Vérifier que le montant est valide
  if (montant <= 0 || isNaN(montant)) {
    console.warn("⚠️ monntant invalide !");
    return;
  }

  // 2️⃣ Vérifier que le destinataire existe
  if (!destinataire) {
    console.warn("⚠️ destinataire invalide !");
    return;
  }

  // 3️⃣ Vérifier que l'expéditeur (notre compte) a assez d'argent
  if (montant > compte.solde) {
    console.warn(`❌ solde insuffisant pour effectuer ce transfert !`);
    console.log(`💰 Solde disponible : ${solde.compte}$`);
    return;
  }

  // 4️⃣ Débiter l'expéditeur
  compte.solde -= montant;
  // 5️⃣ Créditer le destinataire
  destinataire.solde += montant;

  // 6️⃣ Enregistrer la transaction chez l'expéditeur
  compte.transactions.push({
    type: "transfert envoyé",
    montant: montant,
    vers: destinataire.nom,
    date: new Date().toLocaleString(),
  });

  // 7️⃣ Enregistrer la transaction chez le destinataire
  destinataire.transactions.push({
    type: "transfert reçu",
    montant: montant,
    de: compte.nom,
    date: new Date().toLocaleString(),
  });

  // 8️⃣ Afficher un message de succès
  console.log(
    `📤 Transfert de ${montant}$ vers ${destinataire.nom} effectué avec succès ✅`
  );
  console.log(`💰 Votre solde est de : ${compte.solde}$`);
}

afficherSoldeCompte(compte);
console.log("");
afficherSoldeCompte(compte2);

console.log("\n--- Opérations ---\n");

depot(500);
retrait(100);
transfert(compte2, 200);

historique();

console.log("");

afficherSoldeCompte(compte2);
