import {Classe, Etudiant} from "./models";

// Ici on peut seulement donner la valeur des attributs obligatoire

export const ing3info:Classe={id:'1',code:'Ing3',nom:"3em cycle ingenieur"}
const resp:Etudiant={id:1,nom:"FALL",prenom:"Medoune",age:20,poids:15,telephone:"77 XXX XX XX",classe:ing3info}

//On ajoute le responsable dans la classe.
ing3info.responsable=resp


  export const ETUDIANTS:Etudiant[]=[
    resp,
    {id:2,nom:"Aidara",prenom:"Abass",age:20,poids:16,telephone:"78 XXX XX XX",classe:ing3info}
]
// Une fois qu'une constante a ete declarer, on ne plus le constante = mais
//on peut faire des modifications, ie ajouter un nouveau enregistrement pour le
// cas de la listes d'etudiants(etudiants)
// Pour le cas de Classe, on peut cree une nouvelle classe par exemple:
// const ing2info;Classe={}
