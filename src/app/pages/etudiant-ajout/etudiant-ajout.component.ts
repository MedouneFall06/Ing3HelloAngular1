import { Component } from '@angular/core';
import {EnteteComponent} from "../../fragments/entete/entete.component";
import {FormControl, FormGroup, isFormControl, isFormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Classe, Etudiant} from "../../models";
import {CLASSE_LIST, ETUDIANTS, ing1info, ing2info, ing3info} from "../../data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-etudiant-ajout',
  standalone: true,
  imports: [
    EnteteComponent,
    ReactiveFormsModule,

  ],
  templateUrl: './etudiant-ajout.component.html',
  styleUrl: './etudiant-ajout.component.scss'
})
export class EtudiantAjoutComponent {
  etudiantForm = new FormGroup({
    prenom: new FormControl('Medoune', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    // Et s'il y'a +sieurs contraintes, on met en crochets les Validators.
    nom: new FormControl('FALL', [Validators.required, Validators.maxLength(8)]),
    tel: new FormControl('78XXXXXXX', [Validators.required, Validators.maxLength(13)]),
    inscrit: new FormControl(false, [Validators.required]),
    classeId: new FormControl(0, [Validators.required])
  })

  classes: Classe[] = CLASSE_LIST;

  // On cree le constructeur:
  constructor(private  router:Router) {

  }

  etudiantSave() {
    console.log("Saving student!!");
    // Recuperation des donnees
    // 1 er methode: La plus utilise
    const prenom = this.etudiantForm.controls['prenom'].value;
    //2em methode
    const nom = this.etudiantForm.get('nom')?.value;
    // 1 er methode:
    const tel = this.etudiantForm.controls['tel'].value;
    const inscrit = this.etudiantForm.controls['inscrit'].value;
    const classeId = this.etudiantForm.controls['classeId'].value;

    // Maintenant, avant d'envoyer les donnes, il faut s'assurer qu'ils ont
    // ete bien recuperer:
    // console.log("prenom",prenom)
    // console.log("nom",nom)
    // console.log("telephone",tel)
    // console.log("inscrit",inscrit)
    // console.log("classe",classeId)

    //Methode de recuperation d'une classe dans le formulaire

    // let classe:Classe=ing1info.id==classeId?ing1info : (ing2info.id==classeId?ing2info : ing3info)
    let classe:Classe|undefined;

    if(classeId==ing1info.id){
      classe=ing1info;
    }else if (classeId==ing2info.id){
      classe=ing2info;
    }else {
      classe=ing3info;
    }
    // On cree un etudiant ici:
    if (prenom && nom && tel && inscrit ) {
      const etudiant: Etudiant = {
        prenom: prenom,
        nom: nom,
        tel: tel,
        inscrit:inscrit,
        classe: classe
      }
      // On ajoute l'etudiant a la liste des etudiant
      ETUDIANTS.push(etudiant)
      //On affiche l'etudiant dans la page etudiants
      this.router.navigate(['classes',classe.id,'etudiants'])
    }
  }
}
