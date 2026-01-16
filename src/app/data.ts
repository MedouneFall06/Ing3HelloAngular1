import {Classe, Etudiant} from "./models";

// Ici on peut seulement donner la valeur des attributs obligatoire

export const ing3info:Classe={
  id:3,
  code:'Ing3',
  nom:"3èm cycle ingenieur"}

export const ing2info:Classe={
  id:2,
  code:'Ing2',
  nom:"2èm cycle ingenieur"
}

export const ing1info:Classe={
  id:1,
  code:'Ing1',
  nom:"1er cycle ingenieur"
}
export const CLASSE_LIST:Classe[]=[ing1info,ing2info, ing3info]



const resp:Etudiant={id:1,nom:"FALL",prenom:"Medoune",age:20,poids:15,telephone:"77 XXX XX XX",classe:ing3info}

//On ajoute le responsable dans la classe.
ing3info.responsable=resp


  export const ETUDIANTS:Etudiant[]=[
    resp,
    {id:2,nom:"Aidara",prenom:"Abass",age:20,poids:16,telephone:"78 XXX XX XX",classe:ing3info},
    {id:2,nom:"KA",prenom:"Samba",age:20,poids:16,telephone:"78 XXX XX XX",classe:ing3info},
    {id:2,nom:"DIATTA",prenom:"Younouss",age:20,poids:16,telephone:"78 XXX XX XX",classe:ing3info},
    {id:2,nom:"SYLLA",prenom:"Makhoudia",age:20,poids:16,telephone:"78 XXX XX XX",classe:ing3info},
    {id:2,nom:"DIALLO",prenom:"Youssoupha",age:20,poids:16,telephone:"78 XXX XX XX",classe:ing3info}
]
// Une fois qu'une constante a ete declarer, on ne plus le constante = mais
//on peut faire des modifications, ie ajouter un nouveau enregistrement pour le
// cas de la listes d'etudiants(etudiants)
// Pour le cas de Classe, on peut cree une nouvelle classe par exemple:
// const ing2info;Classe={}
