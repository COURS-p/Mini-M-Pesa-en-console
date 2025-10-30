// Mini M-Pesa en console

// =========================
// 1.Comptes de test
// =========================

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

// =========================
// 2. Les fonctions Metier
// =========================

// Afficher le solde
function afficherSoldeCompte(compteActuel = compte) {
  alert(`💰 Solde actuel de ${compteActuel.nom} : ${compteActuel.solde}$ `);
}

// depot d'argent

function depot(montant, compteActuel = compte) {
  montant = Number(montant);

  // 1️⃣ Vérifier que le montant est valide
  if (montant <= 0 || isNaN(montant)) {
    alert("⚠️ monntant invalide !");
    return;
  }
  // 2️⃣ Ajouter le montant au solde du compte1000
  compteActuel.solde += montant;

  // 3️⃣ Enregistrer la transaction dans l’historique
  compteActuel.transactions.push({
    type: "depot",
    montant: montant,
    date: new Date().toLocaleString(),
  });

  // 4️⃣ Confirmer à l’utilisateur
  alert(
    `✅ Dépôt effectué avec succès ! : +${montant}$ \n💰 Nouveau solde : ${compteActuel.solde}$`
  );
}

// retirer de l'argent

function retrait(montant, compteActuel = compte) {
  // 1️⃣ Vérifier que le montant est valide
  if (montant <= 0 || isNaN(montant)) {
    alert("⚠️ monntant invalide !");
    return;
  }

  // 2️⃣ Vérifier que le solde est suffisant

  if (montant >= compteActuel.solde) {
    alert(`❌ solde isuffisant pour effectuer ce retrait !`);
    alert(`💰 Solde actuel : ${compteActuel.solde}$`);
    return;
  }

  // 3️⃣ Retirer le montant
  compteActuel.solde -= montant;

  // 4️⃣ Enregistrer la transaction dans l’historique
  compteActuel.transactions.push({
    type: "retrait",
    montant: montant,
    date: new Date().toLocaleString(),
  });

  // 5️⃣ Afficher un message de confirmation
  alert(`💸 Retrait effectué : -${montant}$`);
  alert(`💰 Nouveau solde : ${compteActuel.solde}$`);
}

// historique des transactions

function historique(compteActuel = compte) {
  // 1️⃣ Vérifier s'il y a des transactions
  if (compteActuel.transactions.length === 0) {
    alert(`📜 Aucune transaction pour le moment !`);
    return;
  }

  let message = `📜 Historique de ${compteActuel.nom} :\n\n`;

  // 2️⃣ Parcourir le tableau des transactions

  for (let i = 0; i < compteActuel.transactions.length; i++) {
    let t = compteActuel.transactions[i];
    message += `${i + 1}. ${t.type.padEnd(5)} | 
    ${t.montant.toString().padStart(5)}$ | ${t.date} \n`;
  }

  // 3️⃣ Afficher le solde final
  message += `\n💰 Solde actuel : ${compte.solde}$`;
  alert(message);
}

// transfert d'argent entre deux comptes

function transfert(destinataire, montant) {
  // 1️⃣ Vérifier que le montant est valide
  if (montant <= 0 || isNaN(montant)) {
    alert("⚠️ monntant invalide !");
    return;
  }

  // 2️⃣ Vérifier que le destinataire existe
  if (!destinataire) {
    alert("⚠️ destinataire invalide !");
    return;
  }

  // 3️⃣ Vérifier que l'expéditeur (notre compte) a assez d'argent
  if (montant >= compte.solde) {
    alert(`❌ solde insuffisant pour effectuer ce transfert !`);
    alert(`💰 Solde disponible : ${solde.compte}$`);
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
  alert(
    `📤 Transfert de ${montant}$ vers ${destinataire.nom} effectué avec succès ✅`
  );
  alert(`💰 Votre solde est de : ${compte.solde}$`);
}

// afficherSoldeCompte(compte);
// alert("");
// afficherSoldeCompte(compte2);

// alert("\n--- Opérations ---\n");

// depot(500);
// retrait(100);
// transfert(compte2, 200);

// historique();

// alert("");

// afficherSoldeCompte(compte2);

// =========================
// 3. Menu interactif
// =========================

let continuer = true;

while (continuer) {
  const choix = prompt(
    "===== MINI M-PESA (console) =====\n" +
      "1️⃣  Voir mon solde\n" +
      "2️⃣  Faire un dépôt\n" +
      "3️⃣  Faire un retrait\n" +
      "4️⃣  Faire un transfert (vers Alliance)\n" +
      "5️⃣  Voir mon historique\n" +
      "6️⃣  Voir le compte d'Alliance\n" +
      "7️⃣  Quitter\n\n" +
      "👉  Entre ton choix (1-7) :"
  );

  if (choix === null) {
    // l'utilisateur a cliqué sur Annuler
    continuer = false;
    alert("👋 Au revoir !");
    break;
  }

  switch (choix) {
    case "1": {
      afficherSoldeCompte();
      break;
    }

    case "2": {
      const montant = prompt("💰 Montant à déposer ?");
      depot(montant);
      break;
    }

    case "3": {
      const montant = prompt("💸 Montant à retirer ?");
      retrait(montant);
      break;
    }

    case "4": {
      const montant = prompt("📤 Montant à transférer à Alliance ?");
      transfert(compte2, montant);
      break;
    }

    case "5": {
      historique();
      break;
    }

    case "6": {
      // juste pour vérifier que le transfert marche
      historique(compte2);
      break;
    }

    case "7": {
      continuer = false;
      alert("✅ Session terminée. Merci !");
      break;
    }
    default: {
      alert("⚠️ Choix invalide ! Veuillez réessayer.");
    }
  }
}
