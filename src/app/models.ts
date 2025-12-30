export interface Classe{
  id?:string; //le point d'interrogation signifie que c'est pas obligatoire
  code:string;
  nom:string;
  description?:string;
  responsable?:Etudiant;

}

export interface Etudiant{
  id?:number;
  prenom:string;
  nom:string;
  age?:number;
  poids?:number;
  addresse?:string;
  telephone:string;
  classe:Classe;
}

//Apres avoir defini les entites, on passe a la creation des composants permettant de lister les classes

