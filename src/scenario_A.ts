interface Etat {
    attaquer(): void;
    sauter(): void;
    seDeplacer(): void;
  }
class Personnage {
    private etat: Etat; 
    constructor() {
      this.etat = new EtatIdle(this);
    }
    public setEtat(etat: Etat) {
      this.etat = etat;
    }
    public attaquer(){
        this.etat.attaquer();
    }
    public sauter() {
      this.etat.sauter();
    }
    public seDeplacer() {
      this.etat.seDeplacer();
    }
  }
  
  class EtatIdle implements Etat {
    constructor(private personnage: Personnage) {}
  
    attaquer() {
      console.log("Le personnage attaque !");
      this.personnage.setEtat(new EtatAttaque(this.personnage));
    }
  
    sauter() {
      console.log("Le personnage saute !");
      this.personnage.setEtat(new EtatSaut(this.personnage));
    }
  
    seDeplacer() {
      console.log("Le personnage commence à se déplacer !");
      this.personnage.setEtat(new EtatDeplacement(this.personnage));
    }
  }
  
  class EtatAttaque implements Etat {
    constructor(private personnage: Personnage) {}
    attaquer() {
      console.log("Je suis entrain d'enchainer tout le monde je peux pas attaquer !");
    }
    sauter() {
      console.log("Impossible de sauter pendant une attaque !");
    }
    seDeplacer() {
      console.log("Je peux pas frapper je me déplace");
    }
  }
  
  class EtatDeplacement implements Etat {
    constructor(private personnage: Personnage) {}
  
    attaquer() {
      console.log("Le personnage attaque pendant qu'il se déplace !");
      this.personnage.setEtat(new EtatAttaque(this.personnage));
    }
  
    sauter() {
      console.log("Le personnage saute depuis la course !");
      this.personnage.setEtat(new EtatSaut(this.personnage));
    }
  
    seDeplacer() {
      console.log("Le personnage continue de se déplacer.");
    }
  }
  
  class EtatSaut implements Etat {
    constructor(private personnage: Personnage) {}
  
    attaquer() {
      console.log("Le personnage attaque en l'air !");
    }
  
    sauter() {
      console.log("Déjà en l'air !");
    }
  
    seDeplacer() {
      console.log("Impossible de se déplacer pendant un saut !");
    }
  }
  
  class EtatEtourdi implements Etat {
    constructor(private personnage: Personnage) {}
  
    attaquer() {
      console.log("Je n'arrive pas a attaquer");
    }
  
    sauter() {
      console.log("Je vois trouble j'ai bien peur de tombé en sautant ! ");
    }
  
    seDeplacer() {
      console.log("Aaaaah je suis étourdie Impossible de bouger !!");
    }
  }
  
  const kebab = new Personnage();
  kebab.attaquer()
  kebab.setEtat(new EtatEtourdi(kebab));
  kebab.seDeplacer();
  kebab.setEtat(new EtatAttaque(kebab));
  kebab.attaquer();