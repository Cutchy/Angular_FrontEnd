export class Assignment {
    id!: number;
    nom : string = '';
    dateLimite : Date = new Date();
    rendu : boolean = false;

    /*
    constructor(nom : string, dateDeRendu : Date, rendu : boolean){
        this.nom = nom;
        this.dateDeRendu = dateDeRendu;
        this.rendu = rendu;
    }*/
}
